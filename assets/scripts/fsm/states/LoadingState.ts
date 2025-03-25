import {AbstractBaseState} from "../stateMatter/Abstract/AbstractBaseState";
import {AppContext} from "../AppContext";
import {AssetsLoader} from "../../utils/AssetsLoader";
import {GameConfig} from "../../types/GameConfig";

export class LoadingState extends AbstractBaseState<AppContext>
{
	private readonly DEFAULT_LOCALE: string = "ru"; //sys.languageCode;

	public Execute()
	{
		this._context.toastNode.active = true;

		this.load().then(() =>
		{
			super.Execute();
		});
	}

	protected async load(): Promise<void>
	{
		const i18n = await AssetsLoader.loadJSON<Object>(`i18n/${this.DEFAULT_LOCALE}`);
		this._context.locale = new Map<string, string>();
		Object.keys(i18n).forEach((key: string) =>
		{
			this._context.locale.set(key, i18n[key]);
		});

		this._context.toastLabel.string = this._context.locale.get("loading");

		this._context.config = await AssetsLoader.loadJSON<GameConfig>("config");
	}
}