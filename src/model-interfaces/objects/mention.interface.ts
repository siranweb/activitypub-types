import {APLink} from './link.interface';

/**
 * A specialized [Link](./link.interface.ts) that represents an @mention.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mention Docs}
 */
export interface APMention extends APLink {
	type: 'Mention';
}
