import {APObject} from './object.interface';

/**
 * Represents any kind of event.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-event Docs}
 */
export interface APEvent extends APObject {
	type: 'Event';
}