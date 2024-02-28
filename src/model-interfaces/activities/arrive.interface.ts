import { APIntransitiveActivity } from './intransitive-activity.interface';

/**
 * An [IntransitiveActivity](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-intransitiveactivity)
 * that indicates that the actor has arrived at the `location`.
 * The `origin` can be used to identify the `context` from which the actor originated.
 * The `target` typically has no defined meaning.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive Docs}
 */
export interface APArrive extends APIntransitiveActivity {
	type: 'Arrive';
}
