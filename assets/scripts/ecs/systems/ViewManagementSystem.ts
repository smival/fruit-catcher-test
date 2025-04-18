import NovaECS, {Engine, EngineEntityListener, Entity} from "@nova-engine/ecs";
import {ViewComponent} from "../components/ViewComponent";
import {find, Node, Prefab, UITransform} from "cc";
import {AssetsLoader} from "../../utils/AssetsLoader";
import {ItemsPool} from "../../pool/ItemsPool";
import {GameEngine} from "../GameEngine";
import {HitComponent} from "../components/HitComponent";
import {CocosHitComponent} from "../../cocosComponents/CocosHitComponent";
import {NodeNames} from "../../NodeNames";
import {PositionComponent} from "../components/PositionComponent";

export class ViewManagementSystem extends NovaECS.System implements EngineEntityListener
{
    protected family?: NovaECS.Family;
    private _viewPoolMap: Map<string, ItemsPool>;
    private _toAdd: Entity[] = [];
    private _toRemove: Entity[] = [];

    constructor(viewPoolMap: Map<string, ItemsPool>)
    {
        super();
        this._viewPoolMap = viewPoolMap;
    }

    onAttach(engine: GameEngine): void
    {
        super.onAttach(engine);

        engine.addEntityListener(this);

        this.family = new NovaECS.FamilyBuilder(engine)
            .include(ViewComponent)
            .build();
    }

    update(engine: GameEngine, delta: number): void
    {
        this._toAdd.forEach((entity) =>
        {
            const viewComponent = entity.getComponent(ViewComponent);
            this.createNodeForEntity(entity, viewComponent);
        });
        this._toAdd = [];

        this._toRemove.forEach((entity) =>
        {
            this.killEntityView(entity);
        });
        this._toRemove = [];

        for (let i = 0; i < this.family.entities.length; i++)
        {
            const entity = this.family.entities[i];
            const posComp = entity.getComponent(PositionComponent);
            const viewComponent = entity.getComponent(ViewComponent);
            if (posComp && viewComponent?.node)
            {
                viewComponent.node.setWorldPosition(posComp.currentX, posComp.currentY, 0);
            }
        }

    }

    public onDetach(engine: Engine)
    {
        this.family.entities.forEach(entity =>
        {
            this.killEntityView(entity);
        });
        super.onDetach(engine);
    }

    private killEntityView(entity: Entity): void
    {
        const viewComp = entity.getComponent<ViewComponent>(ViewComponent);
        if (viewComp.node)
        {
            this._viewPoolMap.get(viewComp.prefabPath).release(viewComp.node);
            viewComp.node.removeFromParent();
            viewComp.node = null;
        }
    }

    public onEntityAdded(entity: Entity): void
    {
        this._toAdd.push(entity);
    }

    public onEntityRemoved(entity: Entity): void
    {
        this._toRemove.push(entity);
    }

    private async createNodeForEntity(entity: NovaECS.Entity, viewComp: ViewComponent): Promise<void>
    {
        if (!this._viewPoolMap.has(viewComp.prefabPath))
        {
            const prefab: Prefab = await AssetsLoader.loadPrefab(viewComp.prefabPath);
            this._viewPoolMap.set(viewComp.prefabPath, new ItemsPool(prefab).init(1));
        }

        const node: Node = this._viewPoolMap.get(viewComp.prefabPath).obtain();
        const parent: Node = find(NodeNames.ViewContainer);

        node.setWorldPosition(1000, 1000, 0);
        if (parent)
        {
            parent.addChild(node);
            entity.getComponent(ViewComponent).node = node;

            // ant view can bit hit (optional)
            if (entity.hasComponent(HitComponent)
                && node.getComponent(CocosHitComponent))
            {
                entity.getComponent(HitComponent).hitTransform =
                    node.getComponent(CocosHitComponent)
                        .hitNode?.getComponent(UITransform)
            }
        }
    }
}
