import { APActor } from './actor.interface';

/**
 * Describes a software service.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-service Docs}
 */
export interface APService extends APActor {
	type: 'Service';
}
