import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has listened to the `object`.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-listen Docs}
 */
export interface APListen extends APActivity {
	type: 'Listen';
}
