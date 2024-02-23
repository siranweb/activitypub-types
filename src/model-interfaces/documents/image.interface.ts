import { APDocument } from './document.interface';

/**
 * An image document of any kind 
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image Docs}
 */
export interface APImage extends Omit<APDocument, 'type'> {
	type: 'Image';
}
