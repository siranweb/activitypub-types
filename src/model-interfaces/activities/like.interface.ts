import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` likes, recommends or endorses the `object`.
 * The `target` and `origin` typically have no defined meaning.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like Docs}
 */
export interface APLike extends APActivity {
	type: 'Like';
}
