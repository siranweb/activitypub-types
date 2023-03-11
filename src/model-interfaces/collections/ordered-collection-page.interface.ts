import {
    OrderedCollectionPageNextField,
    OrderedCollectionPagePartOfField,
    OrderedCollectionPagePrevField,
    StartIndexField
} from '../../fields';
import { APOrderedCollection } from './ordered-collection.interface';

export interface APOrderedCollectionPage extends APOrderedCollection {
    /**
     * Identifies the OrderedCollection to which a OrderedCollectionPage objects items belong.
     *
     * {@link https://www.w3.org/ns/activitystreams#partOf Docs}
     */
    partOf?: OrderedCollectionPagePartOfField;

    /**
     * In a paged OrderedCollection, indicates the next page of items.
     *
     * {@link https://www.w3.org/ns/activitystreams#next Docs}
     */
    next?: OrderedCollectionPageNextField;

    /**
     * In a paged OrderedCollection, identifies the previous page of items.
     *
     * {@link https://www.w3.org/ns/activitystreams#prev Docs}
     */
    prev?: OrderedCollectionPagePrevField;

    /**
     * A non-negative integer value identifying the relative position
     * within the logical view of a strictly ordered collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#startIndex Docs}
     */
    startIndex?: StartIndexField;
}
