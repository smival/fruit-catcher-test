import {AbstractBaseState} from "db://assets/scripts/fsm/stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "db://assets/scripts/fsm/AppContext";
import {AssetsLoader} from "db://assets/scripts/utils/AssetsLoader";
import {GameConfig} from "db://assets/scripts/types/GameConfig";

export class LoadingState extends AbstractBaseState<AppContext>{
	public Execute()
	{
		AssetsLoader.loadJSON<GameConfig>("config").then((conf: GameConfig) => {
			this._context.config = conf;
			super.Execute();
		});
	}
}