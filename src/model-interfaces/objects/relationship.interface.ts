import {SubjectField, ObjectField, RelationshipField} from '../../fields';
import { APObject } from './object.interface';

/**
 * Describes a relationship between two individuals.
 * The `subject` and `object` properties are used to identify the connected individuals.
 * See [5.2 Representing Relationships Between Entities](https://www.w3.org/TR/activitystreams-vocabulary/#connections)
 * for additional information. 
 */
export interface APRelationship extends APObject {
    type: 'Relationship';

    /**
     * On a Relationship object, the subject property identifies one of the connected individuals.
     * For instance, for a Relationship object describing "John is related to Sally",
     * subject would refer to John.
     *
     * {@link https://www.w3.org/ns/activitystreams#subject Docs}
     */
    subject?: SubjectField;

    /**
     * When used within a Relationship describes the entity to which the subject is related.
     *
     * {@link https://www.w3.org/ns/activitystreams#object Docs}
     */
    object?: ObjectField | ObjectField[];

    /**
     * On a Relationship object, the relationship property
     * identifies the kind of relationship that exists between subject and object.
     *
     * {@link https://www.w3.org/ns/activitystreams#relationship Docs}
     */
    relationship?: RelationshipField;
}
