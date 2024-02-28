import { OrderedCollectionItemsField } from '../../fields';
import { APCollection } from './collection.interface';

/**
 * A subtype of [Collection](./collection.interface.ts) in which members
 * of the logical collection are assumed to always be strictly ordered. 
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-orderedcollection Docs}
 */
export interface APOrderedCollection extends Omit<APCollection, 'type' | 'items'> {
    type: 'OrderedCollection'

    /**
     * Identifies the ordered items contained in a collection.
     * The items must be ordered.
     *
     * {@link https://www.w3.org/ns/activitystreams#orderedItems Docs}
     */
    orderedItems?: OrderedCollectionItemsField[];
}
