import { APActivity } from './activity.interface';

export type APIntransitiveActivity = Omit<APActivity, 'object'>