import { APActivity } from './activity.interface';

/**
 * Instances of `IntransitiveActivity` are a subtype of `Activity` representing intransitive actions.
 * The `object` property is therefore inappropriate for these activities.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-intransitiveactivity Docs}
 */
export type APIntransitiveActivity = Omit<APActivity, 'object'>
