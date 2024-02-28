import {DescribesField} from '../../fields';
import { APObject } from './object.interface';

/**
 * A `Profile` is a content object that describes another Object,
 * typically used to describe [Actor Type](https://www.w3.org/TR/activitystreams-vocabulary/#actor-types) objects.
 * The `describes` property is used to reference
 * the object being described by the profile. 
 * 
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-profile Docs}
 */
export interface APProfile extends APObject {
    type: 'Profile';

    /**
     * On a Profile object, the describes property identifies
     * the object described by the Profile.
     *
     * {@link https://www.w3.org/ns/activitystreams#describes Docs}
     */
    describes?: DescribesField;
}
