import {APObject} from '../objects/object.interface';

/**
 * Represents a document of any kind.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-document Docs}
 */
export interface APDocument extends APObject {
	type: 'Document';
}
