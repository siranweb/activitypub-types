import { APActor } from './actor.interface';

/**
 * Represents an individual person.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person Docs}
 */
export interface APPerson extends APActor {
	type: 'Person';
}
