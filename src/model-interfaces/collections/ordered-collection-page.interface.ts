import { StartIndexField } from '../../fields';
import { APCollectionPage } from './collection-page.interface';
import { APOrderedCollection } from './ordered-collection.interface';

/**
 * Used to represent ordered subsets of items from an [OrderedCollection](./ordered-collection.interface.ts).
 * 
 * Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-core/#dfn-orderedcollectionpage)
 * specification for a complete description of the `OrderedCollectionPage` object.
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-orderedcollectionpage Docs}
 */
export interface APOrderedCollectionPage extends Omit<APOrderedCollection, 'type'>, Omit<APCollectionPage, 'type' | 'items'> {
    type: 'OrderedCollectionPage'

    /**
     * A non-negative integer value identifying the relative position
     * within the logical view of a strictly ordered collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#startIndex Docs}
     */
    startIndex?: StartIndexField;
}
