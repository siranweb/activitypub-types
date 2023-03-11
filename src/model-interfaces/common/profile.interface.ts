import {DescribesField} from '../../fields';
import { APObject } from './object.interface';

export interface APProfile extends APObject {

    /**
     * On a Profile object, the describes property identifies
     * the object described by the Profile.
     *
     * {@link https://www.w3.org/ns/activitystreams#describes Docs}
     */
    describes?: DescribesField;
}
