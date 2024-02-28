import { APActor } from './actor.interface';

/**
 * Represents a formal or informal collective of Actors.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-group Docs}
 */
export interface APGroup extends APActor {
	type: 'Group'
}
