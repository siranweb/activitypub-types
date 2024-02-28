import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has deleted the object.
 * If specified, the `origin` indicates the context
 * from which the object was deleted.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete Docs}
 */
export interface APDelete extends APActivity {
	type: 'Delete';
}
