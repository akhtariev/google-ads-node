// package: google.ads.googleads.v0.resources
// file: google/ads/googleads/v0/resources/feed_mapping.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v0_enums_ad_customizer_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/ad_customizer_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_app_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/app_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_call_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/call_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_callout_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/callout_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_custom_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/custom_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_education_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/education_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_feed_mapping_criterion_type_pb from "../../../../../google/ads/googleads/v0/enums/feed_mapping_criterion_type_pb";
import * as google_ads_googleads_v0_enums_feed_mapping_status_pb from "../../../../../google/ads/googleads/v0/enums/feed_mapping_status_pb";
import * as google_ads_googleads_v0_enums_flight_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/flight_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_hotel_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/hotel_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_job_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/job_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_local_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/local_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_message_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/message_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_placeholder_type_pb from "../../../../../google/ads/googleads/v0/enums/placeholder_type_pb";
import * as google_ads_googleads_v0_enums_price_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/price_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_promotion_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/promotion_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_real_estate_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/real_estate_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_sitelink_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/sitelink_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_structured_snippet_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/structured_snippet_placeholder_field_pb";
import * as google_ads_googleads_v0_enums_travel_placeholder_field_pb from "../../../../../google/ads/googleads/v0/enums/travel_placeholder_field_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class FeedMapping extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearAttributeFieldMappingsList(): void;
  getAttributeFieldMappingsList(): Array<AttributeFieldMapping>;
  setAttributeFieldMappingsList(value: Array<AttributeFieldMapping>): void;
  addAttributeFieldMappings(value?: AttributeFieldMapping, index?: number): AttributeFieldMapping;

  getStatus(): google_ads_googleads_v0_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatus;
  setStatus(value: google_ads_googleads_v0_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatus): void;

  hasPlaceholderType(): boolean;
  clearPlaceholderType(): void;
  getPlaceholderType(): google_ads_googleads_v0_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType;
  setPlaceholderType(value: google_ads_googleads_v0_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType): void;

  hasCriterionType(): boolean;
  clearCriterionType(): void;
  getCriterionType(): google_ads_googleads_v0_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionType;
  setCriterionType(value: google_ads_googleads_v0_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionType): void;

  getTargetCase(): FeedMapping.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMapping.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMapping): FeedMapping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMapping;
  static deserializeBinaryFromReader(message: FeedMapping, reader: jspb.BinaryReader): FeedMapping;
}

export namespace FeedMapping {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    attributeFieldMappingsList: Array<AttributeFieldMapping.AsObject>,
    status: google_ads_googleads_v0_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatus,
    placeholderType: google_ads_googleads_v0_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType,
    criterionType: google_ads_googleads_v0_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionType,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    PLACEHOLDER_TYPE = 3,
    CRITERION_TYPE = 4,
  }
}

export class AttributeFieldMapping extends jspb.Message {
  hasFeedAttributeId(): boolean;
  clearFeedAttributeId(): void;
  getFeedAttributeId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFeedAttributeId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasFieldId(): boolean;
  clearFieldId(): void;
  getFieldId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFieldId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSitelinkField(): boolean;
  clearSitelinkField(): void;
  getSitelinkField(): google_ads_googleads_v0_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderField;
  setSitelinkField(value: google_ads_googleads_v0_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderField): void;

  hasCallField(): boolean;
  clearCallField(): void;
  getCallField(): google_ads_googleads_v0_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderField;
  setCallField(value: google_ads_googleads_v0_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderField): void;

  hasAppField(): boolean;
  clearAppField(): void;
  getAppField(): google_ads_googleads_v0_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderField;
  setAppField(value: google_ads_googleads_v0_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderField): void;

  hasCalloutField(): boolean;
  clearCalloutField(): void;
  getCalloutField(): google_ads_googleads_v0_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderField;
  setCalloutField(value: google_ads_googleads_v0_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderField): void;

  hasStructuredSnippetField(): boolean;
  clearStructuredSnippetField(): void;
  getStructuredSnippetField(): google_ads_googleads_v0_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderField;
  setStructuredSnippetField(value: google_ads_googleads_v0_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderField): void;

  hasMessageField(): boolean;
  clearMessageField(): void;
  getMessageField(): google_ads_googleads_v0_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderField;
  setMessageField(value: google_ads_googleads_v0_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderField): void;

  hasPriceField(): boolean;
  clearPriceField(): void;
  getPriceField(): google_ads_googleads_v0_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderField;
  setPriceField(value: google_ads_googleads_v0_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderField): void;

  hasPromotionField(): boolean;
  clearPromotionField(): void;
  getPromotionField(): google_ads_googleads_v0_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderField;
  setPromotionField(value: google_ads_googleads_v0_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderField): void;

  hasAdCustomizerField(): boolean;
  clearAdCustomizerField(): void;
  getAdCustomizerField(): google_ads_googleads_v0_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField;
  setAdCustomizerField(value: google_ads_googleads_v0_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField): void;

  hasEducationField(): boolean;
  clearEducationField(): void;
  getEducationField(): google_ads_googleads_v0_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderField;
  setEducationField(value: google_ads_googleads_v0_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderField): void;

  hasFlightField(): boolean;
  clearFlightField(): void;
  getFlightField(): google_ads_googleads_v0_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderField;
  setFlightField(value: google_ads_googleads_v0_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderField): void;

  hasCustomField(): boolean;
  clearCustomField(): void;
  getCustomField(): google_ads_googleads_v0_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderField;
  setCustomField(value: google_ads_googleads_v0_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderField): void;

  hasHotelField(): boolean;
  clearHotelField(): void;
  getHotelField(): google_ads_googleads_v0_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderField;
  setHotelField(value: google_ads_googleads_v0_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderField): void;

  hasRealEstateField(): boolean;
  clearRealEstateField(): void;
  getRealEstateField(): google_ads_googleads_v0_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField;
  setRealEstateField(value: google_ads_googleads_v0_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField): void;

  hasTravelField(): boolean;
  clearTravelField(): void;
  getTravelField(): google_ads_googleads_v0_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderField;
  setTravelField(value: google_ads_googleads_v0_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderField): void;

  hasLocalField(): boolean;
  clearLocalField(): void;
  getLocalField(): google_ads_googleads_v0_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderField;
  setLocalField(value: google_ads_googleads_v0_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderField): void;

  hasJobField(): boolean;
  clearJobField(): void;
  getJobField(): google_ads_googleads_v0_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderField;
  setJobField(value: google_ads_googleads_v0_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderField): void;

  getFieldCase(): AttributeFieldMapping.FieldCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeFieldMapping.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeFieldMapping): AttributeFieldMapping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributeFieldMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeFieldMapping;
  static deserializeBinaryFromReader(message: AttributeFieldMapping, reader: jspb.BinaryReader): AttributeFieldMapping;
}

export namespace AttributeFieldMapping {
  export type AsObject = {
    feedAttributeId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    fieldId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    sitelinkField: google_ads_googleads_v0_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderField,
    callField: google_ads_googleads_v0_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderField,
    appField: google_ads_googleads_v0_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderField,
    calloutField: google_ads_googleads_v0_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderField,
    structuredSnippetField: google_ads_googleads_v0_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderField,
    messageField: google_ads_googleads_v0_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderField,
    priceField: google_ads_googleads_v0_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderField,
    promotionField: google_ads_googleads_v0_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderField,
    adCustomizerField: google_ads_googleads_v0_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField,
    educationField: google_ads_googleads_v0_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderField,
    flightField: google_ads_googleads_v0_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderField,
    customField: google_ads_googleads_v0_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderField,
    hotelField: google_ads_googleads_v0_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderField,
    realEstateField: google_ads_googleads_v0_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField,
    travelField: google_ads_googleads_v0_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderField,
    localField: google_ads_googleads_v0_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderField,
    jobField: google_ads_googleads_v0_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderField,
  }

  export enum FieldCase {
    FIELD_NOT_SET = 0,
    SITELINK_FIELD = 3,
    CALL_FIELD = 4,
    APP_FIELD = 5,
    CALLOUT_FIELD = 8,
    STRUCTURED_SNIPPET_FIELD = 9,
    MESSAGE_FIELD = 10,
    PRICE_FIELD = 11,
    PROMOTION_FIELD = 12,
    AD_CUSTOMIZER_FIELD = 13,
    EDUCATION_FIELD = 16,
    FLIGHT_FIELD = 17,
    CUSTOM_FIELD = 18,
    HOTEL_FIELD = 19,
    REAL_ESTATE_FIELD = 20,
    TRAVEL_FIELD = 21,
    LOCAL_FIELD = 22,
    JOB_FIELD = 23,
  }
}

