import { director, sp, Node, Animation } from 'cc';

export type AnimationPromise = Promise<sp.spine.Animation | void>;

export class AnimationsUtils
{
	private static spinePromiseResolves: Map<sp.Skeleton, Function> = new Map<sp.Skeleton, Function>();
	private static animationPromiseResolves: Map<Animation, Function> = new Map<Animation, Function>();

	public static playSpine(pSpine: sp.Skeleton, pAnimationName: string, pLoop: boolean = false): AnimationPromise
	{
		pSpine.paused = false;
		return new Promise<sp.spine.Animation | void>(resolve =>
		{
			// hack to be sure skeleton will be added to render
			director._nodeActivator.activateNode(pSpine.node, true);
			pSpine.node.active = true;

			if (pSpine.findAnimation(pAnimationName) == null)
			{
				console.warn("----> Spine Animation not found", pAnimationName)
				resolve();
			}

			pSpine.setAnimation(0, pAnimationName, pLoop);
			if (pLoop)
			{
				resolve();
			} else
			{
				AnimationsUtils.spinePromiseResolves.set(pSpine, resolve);
				pSpine.setCompleteListener((res) =>
				{
					pSpine.setCompleteListener(null);
					AnimationsUtils.spinePromiseResolves.delete(pSpine);
					resolve(res.animation);
				});
			}
		});
	}

	public static playAnimation(pNode: Node, pAnimationName: string = null): Promise<void>
	{
		const animation = pNode.getComponent(Animation);
		if (!animation)
		{
			console.warn("----> Timeline Animation component not found for node", pNode.name)
			return;
		}

		if (pAnimationName && !animation.clips.find(clip => clip.name == pAnimationName))
		{
			console.warn("----> Timeline Animation name not found", pAnimationName);
			return;
		}

		return new Promise<void>(resolve =>
		{
			AnimationsUtils.animationPromiseResolves.set(animation, resolve);
			animation.once(Animation.EventType.FINISHED, () =>
			{
				AnimationsUtils.animationPromiseResolves.delete(animation);
				resolve();
			});
			animation.play(pAnimationName);
		});
	}
}