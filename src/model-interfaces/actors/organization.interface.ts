import { APActor } from './actor.interface';

/**
 * Represents an organization.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-organization Docs}
 */
export interface APOrganization extends APActor {
	type: 'Organization';
}
