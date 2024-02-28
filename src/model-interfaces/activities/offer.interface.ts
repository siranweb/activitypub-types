import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` is offering the `object`.
 * If specified, the `target` indicates the entity to
 * which the object is being offered.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-offer Docs}
 */
export interface APOffer extends APActivity {
	type: 'Offer';
}
