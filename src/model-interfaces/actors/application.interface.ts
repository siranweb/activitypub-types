import { APActor } from './actor.interface';

/**
 * Describes a software application.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-application Docs}
 */
export interface APApplication extends APActor {
	type: 'Application';
}
