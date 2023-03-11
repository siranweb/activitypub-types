import {AnyOfField, ClosedField, OneOfField} from '../../fields';
import { APIntransitiveActivity } from './intransitive-activity.interface';

export interface APQuestion extends APIntransitiveActivity {

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
