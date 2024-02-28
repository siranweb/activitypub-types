import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` dislikes the `object`.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike Docs}
 */
export interface APDislike extends APActivity {
	type: 'Dislike';
}
