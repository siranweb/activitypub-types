import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has joined the `object`.
 * The `target` and `origin` typically have no defined meaning.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-join Docs}
 */
export interface APJoin extends APActivity {
	type: 'Join';
}
