import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has viewed the `object`.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-view Docs}
 */
export interface APView extends APActivity {
	type: 'View';
}
