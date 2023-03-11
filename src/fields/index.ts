import {
    APCollection,
    APOrderedCollection,
    APObject,
    APArticle,
    APAudio,
    APDocument,
    APEvent,
    APImage,
    APNote,
    APPage,
    APPlace,
    APProfile,
    APRelationship,
    APTombstone,
    APVideo,
    APLink,
    APCollectionPage,
    APOrderedCollectionPage,
    APMention,
} from '../model-interfaces';

export type AnyCollection = APCollection | APOrderedCollection;
export type AnyAPObject = APObject | APArticle | APAudio | APDocument | APEvent | APImage | APNote | APPage | APPlace | APProfile | APRelationship | APTombstone | APVideo | AnyCollection;

export type DateTime = string | Date;
export type LanguageTag = string;
export type MediaType = string;
export type Duration = string;

export type ContextField = string | Record<string, string>;
export type UrlField = string | APLink;
export type IdField = string;
export type TypeField = string;
export type DurationField = Duration;
export type ContentField = string;
export type ContentMapField = Record<string, string>;
export type MediaTypeField = MediaType;
export type NameField = string;
export type NameMapField = Record<string, string>;
export type SummaryField = string;
export type SummaryMapField = Record<string, string>;
export type EndTimeField = DateTime;
export type StartTimeField = DateTime;
export type PublishedField = DateTime;
export type UpdatedField = DateTime;
export type RepliesField = string | AnyCollection;
export type RelationshipField = string | AnyAPObject;
export type IconField = string | APImage | APLink;
export type ImageField = string | APImage | APLink;
export type AttachmentField = string | AnyAPObject | APLink;
export type AudienceField = string | AnyAPObject | APLink;
export type InReplyToField = string | AnyAPObject | APLink;
export type LocationField = string | APPlace | APLink;
export type PreviewField = string | AnyAPObject | APLink;
export type ToField = string | AnyAPObject | APLink;
export type BtoField = string | AnyAPObject | APLink;
export type CcField = string | AnyAPObject | APLink;
export type BccField = string | AnyAPObject | APLink;
export type GeneratorField = string | AnyAPObject | APLink;
export type ObjectField = string | AnyAPObject | APLink;
export type AttributedToField = string | AnyAPObject | APLink | APMention;
export type TagField = string | AnyAPObject | APLink | APMention;
export type ActorField = string | AnyAPObject | APLink;
export type TargetField = string | AnyAPObject | APLink;
export type ResultField = string | AnyAPObject | APLink;
export type OriginField = string | AnyAPObject | APLink;
export type InstrumentField = string | AnyAPObject | APLink;
export type OneOfField = string | AnyAPObject | APLink;
export type AnyOfField = string | AnyAPObject | APLink;
export type SubjectField = string | AnyAPObject | APLink;
export type AccuracyField = number;
export type AltitudeField = number;
export type LatitudeField = number;
export type LongitudeField = number;
export type RadiusField = number;
export type UnitsField = 'cm' | 'feet' | 'inches' | 'km' | 'm' | 'miles' | string;
export type ClosedField = string | AnyAPObject | APLink | DateTime | boolean;
export type FormerTypeField = string;
export type DeletedField = DateTime;
export type DescribesField = string | AnyAPObject;
export type HrefField = string;
export type HreflangField = LanguageTag;
export type RelField = string;
export type HeightField = number;
export type WidthField = number;
export type TotalItemsField = number;
export type CollectionCurrentField = string | APCollectionPage | APLink;
export type CollectionFirstField = string | APCollectionPage | APLink;
export type CollectionLastField = string | APCollectionPage | APLink;
export type CollectionItemsField = string | APCollectionPage | APLink;
export type CollectionPagePartOfField = string | APCollection | APLink;
export type CollectionPageNextField = string | APCollection | APLink;
export type CollectionPagePrevField = string | APCollection | APLink;
export type OrderedCollectionCurrentField = string | APOrderedCollectionPage | APLink;
export type OrderedCollectionFirstField = string | APOrderedCollectionPage | APLink;
export type OrderedCollectionLastField = string | APOrderedCollectionPage | APLink;
export type OrderedCollectionItemsField = string | APOrderedCollectionPage | APLink;
export type OrderedCollectionPagePartOfField = string | APOrderedCollection | APLink;
export type OrderedCollectionPageNextField = string | APOrderedCollection | APLink;
export type OrderedCollectionPagePrevField = string | APOrderedCollection | APLink;
export type StartIndexField = number;
export type SourceField = {
    content: ContentField,
    mediaType?: MediaType,
}
export type InboxField = string | APOrderedCollection | APLink;
export type OutboxField = string | APOrderedCollection | APLink;
export type FollowingField = string | APCollection | APOrderedCollection | APLink;
export type FollowersField = string | APCollection | APOrderedCollection | APLink;
export type LikedField = string | APCollection | APOrderedCollection | APLink;
export type LikesField = string | APCollection | APOrderedCollection | APLink;
export type SharesField = string | APCollection | APOrderedCollection | APLink;
export type StreamsField = string | APCollection | APOrderedCollection | APLink;
export type PreferredUsernameField = string;
export type PreferredUsernameMapField = Record<string, string>;
export type ProxyUrlField = string;
export type OauthAuthorizationEndpointField = string;
export type OauthTokenEndpointField = string;
export type ProvideClientKeyField = string;
export type SignClientKeyField = string;
export type SharedInboxField = string;
export type EndpointsField = {
    proxyUrl?: ProxyUrlField;
    oauthAuthorizationEndpoint?: OauthAuthorizationEndpointField;
    oauthTokenEndpoint?: OauthTokenEndpointField;
    provideClientKey?: ProvideClientKeyField;
    signClientKey?: SignClientKeyField;
    sharedInbox?: SharedInboxField;
}