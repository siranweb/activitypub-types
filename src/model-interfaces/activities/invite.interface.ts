import { APOffer } from './offer.interface';

/**
 * A specialization of [Offer](./offer.interface.ts)
 * in which the `actor` is extending an invitation
 * for the `object` to the `target`. 
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-invite Docs}
 */
export interface APInvite extends Omit<APOffer, 'type'> {
	type: 'Invite';
}
