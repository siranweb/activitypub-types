import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has read the `object`.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-read Docs}
 */
export interface APRead extends APActivity {
	type: 'Read';
}
