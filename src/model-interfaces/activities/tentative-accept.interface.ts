import { APAccept } from './accept.interface';

/**
 * A specialization of [Accept](./accept.interface.ts)
 * indicating that the acceptance is tentative.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept Docs}
 */
export interface APTentativeAccept extends Omit<APAccept, 'type'> {
	type: 'TentativeAccept';
}
