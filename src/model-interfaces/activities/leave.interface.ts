import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has left the `object`.
 * The `target` and `origin` typically have no meaning.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-leave Docs}
 */
export interface APLeave extends APActivity {
	type: 'Leave';
}
