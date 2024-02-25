import { APObject } from '../objects/object.interface';

/**
 * Represents a short written work typically less than a single paragraph in length.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note Docs}
 */
export interface APNote extends APObject {
	type: 'Note';
}