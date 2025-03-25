export enum FormatType
{
	NoFormat,
	MMss,
	TotalPoints,
	FloatingPoints
}

export class FormatUtils
{
	public static noFormat(value: number): string
	{
		return value.toString();
	}

	public static toMMss(value: number): string
	{
		if (value < 0 || !Number.isFinite(value))
		{
			throw new Error("Invalid input: must be a non-negative finite number");
		}

		const mm = Math.floor(value / 60);
		const ss = Math.floor(value % 60);

		return (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss;
	}

	public static toTotalPoints(value: number): string
	{
		return value.toString();
	}

	public static toFloatingPoints(value: number): string
	{
		return `+${value.toString()}`;
	}
}

export const formatHandlers = {
	[FormatType.NoFormat]: FormatUtils.noFormat,
	[FormatType.MMss]: FormatUtils.toMMss,
	[FormatType.TotalPoints]: FormatUtils.toTotalPoints,
	[FormatType.FloatingPoints]: FormatUtils.toFloatingPoints
}