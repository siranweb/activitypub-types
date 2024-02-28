import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has moved `object` from `origin` to `target`.
 * If the `origin` or `target` are not specified, either can be determined by context.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-move Docs}
 */
export interface APMove extends APActivity {
	type: 'Move';
}
