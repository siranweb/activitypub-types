import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` is ignoring the `object`.
 * The `target` and `origin` typically have no defined meaning.  
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore Docs}
 */
export interface APIgnore extends APActivity {
	type: 'Ignore';
}
