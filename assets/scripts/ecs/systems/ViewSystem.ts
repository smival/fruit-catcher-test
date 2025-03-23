import NovaECS, {Engine, Entity} from "@nova-engine/ecs";
import {MovementComponent} from "../components/MovementComponent";
import {ViewComponent} from "../components/ViewComponent";
import {find, Prefab, Node, UITransform} from "cc";
import {AssetsLoader} from "../../utils/AssetsLoader";
import {ItemsPool} from "../../pool/ItemsPool";
import {GameEngine} from "../GameEngine";
import {HitComponent} from "../components/HitComponent";
import {CocosHitComponent} from "../../cocosComponents/CocosHitComponent";
import {NodeNames} from "../../NodeNames";

export class ViewSystem extends NovaECS.System {
    protected family?: NovaECS.Family;
    private _processedEntities: Set<NovaECS.Entity> = new Set();
    private _nodesFamily?: NovaECS.Family;
    private _viewPoolMap: Map<string, ItemsPool>;

    constructor(viewPoolMap: Map<string, ItemsPool>)
    {
        super();
        this._viewPoolMap = viewPoolMap;
    }

    onAttach(engine: GameEngine): void {
        super.onAttach(engine);

        this.family = new NovaECS.FamilyBuilder(engine)
            .include(ViewComponent)
            .build();

        this._nodesFamily = new NovaECS.FamilyBuilder(engine)
            .include(ViewComponent)
            .include(MovementComponent)
            .build();
    }

    update(engine: GameEngine, delta: number): void {
        if (!this.family) return;

        this.family.entities.forEach(entity => {
            if (!this._processedEntities.has(entity)) {
                const viewComp = entity.getComponent(ViewComponent);
                if (viewComp) {
                    this.createNodeForEntity(entity, viewComp);
                    this._processedEntities.add(entity);
                }
            }
        });

        if (this._nodesFamily) {
            this._nodesFamily.entities.forEach(entity => {
                const movementComp = entity.getComponent<MovementComponent>(MovementComponent);
                const viewComponent = entity.getComponent<ViewComponent>(ViewComponent);
                if (movementComp && viewComponent?.node) {
                    viewComponent.node.setWorldPosition(movementComp.currentX, movementComp.currentY, 0);
                }
            });
        }

        const currentEntities = new Set(this.family.entities);
        Array.from(this._processedEntities).forEach(entity => {
            if (!currentEntities.has(entity)) {
                this.killEntity(entity);
            }
        });
    }

    private killEntity(entity:Entity): void
    {
        const viewComp = entity.getComponent<ViewComponent>(ViewComponent);
        this._processedEntities.delete(entity);
        this._viewPoolMap.get(viewComp.prefabPath).release(viewComp.node);
        viewComp.node.removeFromParent();
        viewComp.node = null;
    }

    private async createNodeForEntity(entity: NovaECS.Entity, viewComp: ViewComponent): Promise<void> {
        const prefab: Prefab = await AssetsLoader.loadPrefab(viewComp.prefabPath);

        if (!this._viewPoolMap.has(viewComp.prefabPath)) {
            this._viewPoolMap.set(viewComp.prefabPath, new ItemsPool(prefab).init(1));
        }

        const node: Node = this._viewPoolMap.get(viewComp.prefabPath).obtain();
        const parent: Node = find(NodeNames.ViewContainer);

        if (parent) {
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

    public onDetach(engine: Engine)
    {
        this.family.entities.forEach(entity => {
            this.killEntity(entity);
        });
        super.onDetach(engine);
    }
}
