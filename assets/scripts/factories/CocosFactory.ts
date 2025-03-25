import {Node} from "cc";
import {CocosFloatingLabel} from "../cocosComponents/ui/CocosFloatingLabel";
import {formatHandlers, FormatType} from "../utils/FormatUtils";

export interface FloatingLabelData
{
	score: number;
	formatter: FormatType
}

export type CocosFactoryFunc = (node: Node, data: any) => void;

export class CocosFactory
{
	public static buildFloatingLabel(node: Node, data: FloatingLabelData)
	{
		const comp = node.getComponent(CocosFloatingLabel);
		const formatFunc: (v: number) => string = formatHandlers[data.formatter];
		comp.label.string = formatFunc(data.score);
	}
}