import {AnyOfField, ClosedField, OneOfField} from '../../fields';
import { APIntransitiveActivity } from './intransitive-activity.interface';

interface Question extends APIntransitiveActivity {
    type: 'Question';

    /**
     * Identifies an exclusive option for a Question.
     * Use of oneOf implies that the Question can have only a single answer.
     * To indicate that a Question can have multiple answers, use anyOf.
     *
     * {@link https://www.w3.org/ns/activitystreams#oneOf Docs}
     */
    oneOf?: OneOfField[];

    /**
     * Identifies an inclusive option for a Question.
     * Use of anyOf implies that the Question can have multiple answers.
     * To indicate that a Question can have only one answer, use oneOf.
     *
     * {@link https://www.w3.org/ns/activitystreams#anyOf Docs}
     */
    anyOf?: AnyOfField[];

    /**
     * Indicates that a question has been closed, and answers are no longer accepted.
     *
     * {@link https://www.w3.org/ns/activitystreams#closed Docs}
     */
    closed?: ClosedField;
}

/**
 * Represents a question being asked.
 * Question objects are an extension of [IntransitiveActivity](./intransitive-activity.interface.ts).
 * That is, the `Question` object is an `Activity`,
 * but the direct object is the question itself and
 * therefore it would not contain an `object` property.
 * 
 * Either of the `anyOf` and `oneOf` properties MAY be
 * used to express possible answers, but a `Question`
 * object MUST NOT have both properties.
 */
export type APQuestion = Omit<Question, 'anyOf'> | Omit<Question, 'oneOf'>
