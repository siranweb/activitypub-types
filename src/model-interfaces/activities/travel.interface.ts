import { APIntransitiveActivity } from './intransitive-activity.interface';

/**
 * Indicates that the `actor` is traveling to `target` from `origin`.
 * Travel is an `IntransitiveObject` whose `actor` specifies the direct object.
 * If the `target` or `origin` are not specified, either can be determined by context.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-travel Docs}
 */
export interface APTravel extends APIntransitiveActivity {
	type: 'Travel';
}