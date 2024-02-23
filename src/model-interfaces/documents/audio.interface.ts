import { APDocument } from './document.interface';

/**
 * Represents an audio document of any kind.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audio Docs}
 */
export interface APAudio extends Omit<APDocument, 'type'> {
	type: 'Audio';
}
