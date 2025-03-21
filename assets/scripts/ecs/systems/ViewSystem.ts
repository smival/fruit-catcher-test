import NovaECS from "@nova-engine/ecs";
import {GameEngine} from "../../GameEngine";
import {MovementComponent} from "../components/MovementComponent";
import {ViewComponent} from "../components/ViewComponent";
import {find, Prefab, Node} from "cc";
import {AssetsLoader} from "../../utils/AssetsLoader";
import {ItemsPool} from "db://assets/scripts/pool/ItemsPool";

export class ViewSystem extends NovaECS.System {
    protected family?: NovaECS.Family;
    private _processedEntities: Set<NovaECS.Entity> = new Set();
    private _nodesFamily?: NovaECS.Family;
    private _viewPoolMap: Map<string, ItemsPool> = new Map<string, ItemsPool>(); // prefab path / pool

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
                const viewComp = entity.getComponent<ViewComponent>(ViewComponent);
                //if (viewComp?.node) {
                 //   viewComp.node.destroy();
                //}
                this._processedEntities.delete(entity);
                this._viewPoolMap.get(viewComp.prefabPath).release(viewComp.node);
                viewComp.node.removeFromParent();
                viewComp.node = null;
            }
        });
    }

    private async createNodeForEntity(entity: NovaECS.Entity, viewComp: ViewComponent): Promise<void> {
        const prefab: Prefab = await AssetsLoader.loadPrefab(viewComp.prefabPath);

        if (!this._viewPoolMap.has(viewComp.prefabPath)) {
            this._viewPoolMap.set(viewComp.prefabPath, new ItemsPool(prefab).init(1));
        }

        const node: Node = this._viewPoolMap.get(viewComp.prefabPath).obtain();
        const canvas: Node = find("Canvas");

        if (canvas) {
            canvas.addChild(node);
            entity.getComponent(ViewComponent).node = node;
        }
}
}
