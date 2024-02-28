import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` accepts the `object`.
 * The `target` property can be used in certain circumstances
 * to indicate the context into which the `object` has been accepted.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept Docs}
 */
export interface APAccept extends APActivity {
	type: 'Accept';
}
