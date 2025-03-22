import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";
import {AssetsLoader} from "../../utils/AssetsLoader";
import {GameConfig} from "../../types/GameConfig";

export class LoadingState extends AbstractBaseState<AppContext>{
	public Execute()
	{
		this._context.toastUI.active = true;
		AssetsLoader.loadJSON<GameConfig>("config").then((conf: GameConfig) => {
			this._context.config = conf;
			super.Execute();
		});
	}
}