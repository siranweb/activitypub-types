import { APReject } from './reject.interface';

/**
 * A specialization of [Reject](./reject.interface.ts)
 * in which the rejection is considered tentative.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativereject Docs}
 */
export interface APTentativeReject extends Omit<APReject, 'type'> {
	type: 'TentativeReject';
}
