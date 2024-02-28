import {DeletedField, FormerTypeField} from '../../fields';
import { APObject } from './object.interface';

/**
 * A `Tombstone` represents a content object that has been deleted.
 * It can be used in [Collection](../collections/collection.interface.ts)s
 * to signify that there used to be an object at this position, but it has been deleted.
 */
export interface APTombstone extends APObject {
    type: 'Tombstone';

    /**
     * On a Tombstone object, the formerType property identifies
     * the type of the object that was deleted.
     *
     * {@link https://www.w3.org/ns/activitystreams#formerType Docs}
     */
    formerType?: FormerTypeField;

    /**
     * On a Tombstone object, the deleted property is a timestamp
     * for when the object was deleted.
     *
     * If time must be specified - use {@link https://www.w3schools.blog/xsd-date-and-time-data-types xsd:dateTime}
     *
     * {@link https://www.w3.org/ns/activitystreams#deleted Docs}
     */
    deleted?: DeletedField;
}
