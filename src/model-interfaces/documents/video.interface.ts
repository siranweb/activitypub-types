import { APDocument } from './document.interface';

/**
 * Represents a video document of any kind.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-video Docs}
 */
export interface APVideo extends Omit<APDocument, 'type'> {
	type: 'Video';
}
