import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` is rejecting the `object`.
 * The `target` and `origin` typically have no defined meaning.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject Docs}
 */
export interface APReject extends APActivity {
	type: 'Reject';
}
