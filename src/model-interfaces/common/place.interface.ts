import {APObject} from './object.interface';
import {
    AccuracyField,
    AltitudeField,
    LatitudeField,
    LongitudeField,
    RadiusField,
    UnitsField
} from '../../fields';


export interface APPlace extends APObject {

    /**
     * Indicates the accuracy of position coordinates on a Place objects.
     * Expressed in properties of percentage. e.g. "94.0" means "94.0% accurate".
     *
     * {@link https://www.w3.org/ns/activitystreams#accuracy Docs}
     */
    accuracy?: AccuracyField;

    /**
     * Indicates the altitude of a place. The measurement units is indicated using the "units" property.
     * If units is not specified, the default is assumed to be "m" indicating "meters".
     *
     * {@link https://www.w3.org/ns/activitystreams#altitude Docs}
     */
    altitude?: AltitudeField;

    /**
     * The latitude of a place
     *
     * {@link https://www.w3.org/ns/activitystreams#latitude Docs}
     */
    latitude?: LatitudeField;

    /**
     * The longitude of a place
     *
     * {@link https://www.w3.org/ns/activitystreams#longitude Docs}
     */
    longitude?: LongitudeField;

    /**
     * The radius from the given latitude and longitude for a Place.
     * The units are expressed by the "units" property. If units is not specified,
     * the default is assumed to be "m" indicating "meters".
     *
     * {@link https://www.w3.org/ns/activitystreams#radius Docs}
     */
    radius?: RadiusField;

    /**
     * Specifies the measurement units for the radius and altitude properties
     * on a Place object. If not specified, the default is assumed to be "m" for "meters".
     *
     * {@link https://www.w3.org/ns/activitystreams#units Docs}
     */
    units?: UnitsField;
}
