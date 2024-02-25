import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has created the `object`.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create Docs}
 */
export interface APCreate extends APActivity {
	type: 'Create';
}
