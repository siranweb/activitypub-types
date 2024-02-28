import { ContextField } from '../fields';

export type APRoot<APModel> = APModel & {
    /**
     * JSON-LD uses the special @context property to define the processing context.
     * The Field of the @context property is defined by the [JSON-LD] specification.
     *
     * {@link https://www.w3.org/TR/activitystreams-core/#jsonld Docs}
     */
    '@context'?: ContextField | ContextField[];
}
