import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` has updated the `object`.
 * Note, however, that this vocabulary does not define a mechanism
 * for describing the actual set of modifications made to object.
 * 
 * The `target` and `origin` typically have no defined meaning. 
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update Docs}
 */
export interface APUpdate extends APActivity {
	type: 'Update';
}
	