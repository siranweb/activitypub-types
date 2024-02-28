import { APActivity } from './activity.interface';

/**
 * Indicates that the `actor` is "flagging" the `object`.
 * Flagging is defined in the sense common to many social platforms
 * as reporting content as being inappropriate for any number of reasons.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-flag Docs}
 */
export interface APFlag extends APActivity {
	type: 'Flag';
}
