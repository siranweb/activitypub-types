import { APCollection } from './collection.interface';
import {CollectionPageNextField, CollectionPagePartOfField, CollectionPagePrevField} from '../../fields';

/**
 * Used to represent distinct subsets of items from a [Collection](./collection.interface.ts).
 * 
 * Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-core/#dfn-collectionpage)
 * specification for a complete description of the `CollectionPage` object.
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collectionpage Docs}
 */
export interface APCollectionPage extends Omit<APCollection, 'type'> {
    type: 'CollectionPage'

    /**
     * Identifies the Collection to which a CollectionPage objects items belong.
     *
     * {@link https://www.w3.org/ns/activitystreams#partOf Docs}
     */
    partOf?: CollectionPagePartOfField;

    /**
     * In a paged Collection, indicates the next page of items.
     *
     * {@link https://www.w3.org/ns/activitystreams#next Docs}
     */
    next?: CollectionPageNextField;

    /**
     * In a paged Collection, identifies the previous page of items.
     *
     * {@link https://www.w3.org/ns/activitystreams#prev Docs}
     */
    prev?: CollectionPagePrevField;
}
