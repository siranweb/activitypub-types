import { APCollection } from './collection.interface';
import {CollectionPageNextField, CollectionPagePartOfField, CollectionPagePrevField} from '../../fields';

export interface APCollectionPage extends APCollection {

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
