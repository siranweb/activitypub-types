import {
    OrderedCollectionCurrentField,
    OrderedCollectionFirstField, OrderedCollectionItemsField,
    OrderedCollectionLastField, TotalItemsField
} from '../../fields';
import { APObject } from '../common/object.interface';

export interface APOrderedCollection extends APObject {

    /**
     * A non-negative integer specifying the total number of objects contained by
     * the logical view of the collection. This number might not reflect the actual
     * number of items serialized within the Collection object instance.
     *
     * {@link https://www.w3.org/ns/activitystreams#totalItems Docs}
     */
    totalItems?: TotalItemsField;

    /**
     * In a paged OrderedCollection, indicates the page that contains
     * the most recently updated member items.
     *
     * {@link https://www.w3.org/ns/activitystreams#current Docs}
     */
    current?: OrderedCollectionCurrentField;

    /**
     * In a paged OrderedCollection, indicates the furthest proceeding
     * page of items in the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#first Docs}
     */
    first?: OrderedCollectionFirstField;

    /**
     * In a paged OrderedCollection, indicates the furthest proceeding
     * page of the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#last Docs}
     */
    last?: OrderedCollectionLastField;

    /**
     * Identifies the ordered items contained in a collection.
     * The items must be ordered.
     *
     * {@link https://www.w3.org/ns/activitystreams#orderedItems Docs}
     */
    orderedItems?: OrderedCollectionItemsField[];
}
