import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` is calling the `target`'s attention the `object`.
 * The `origin` typically has no defined meaning.  
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce Docs}
 */
export interface APAnnounce extends APActivity {
	type: 'Announce';
}
