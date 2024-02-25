import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has added the `object` to the `target`.
 * If the `target` property is not explicitly specified,
 * the target would need to be determined implicitly by context.
 * The origin can be used to identify the `context` from which the `object` originated.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add Docs}
 */
export interface APAdd extends APActivity {
	type: 'Add';
}
