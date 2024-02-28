import { APDocument } from './document.interface';

/**
 * Represents a Web Page.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-page Docs}
 */
export interface APPage extends Omit<APDocument, 'type'> {
	type: 'Page';
}
