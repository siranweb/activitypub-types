import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` is undoing the `object`.
 * In most cases, the `object` will be an [Activity](./activity.interface.ts)
 * describing some previously performed action (for instance, a person may
 * have previously "liked" an article but, for whatever reason, might choose
 * to undo that like at some later point in time).
 * 
 * The `target` and `origin` typically have no defined meaning. 
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo Docs}
 */
export interface APUndo extends APActivity {
	type: 'Undo';
}
