import {APObject} from '../objects/object.interface';

/**
 * Represents any kind of multi-paragraph written work.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-article Docs}
 */
export interface APArticle extends APObject {
	type: 'Article';
}
