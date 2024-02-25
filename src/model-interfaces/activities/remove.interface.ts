import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` is removing the `object`.
 * If specified, the `origin` indicates the context
 * from which the `object` is being removed. 
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-remove Docs}
 */
export interface APRemove extends APActivity {
	type: 'Remove';
}
