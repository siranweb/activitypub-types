import { APIgnore } from './ignore.interface';

/**
 * Indicates that the `actor` is blocking the `object`.
 * Blocking is a stronger form of [Ignore](./ignore.interface.ts).
 * The typical use is to support social systems that allow
 * one user to block activities or content of other users.
 * The `target` and `origin` typically have no defined meaning.
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block Docs}
 */
export interface APBlock extends Omit<APIgnore, 'type'> {
	type: 'Block';
}
