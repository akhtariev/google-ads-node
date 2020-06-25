"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_ad_group_audience_view_service_pb=require("../../../../../google/ads/googleads/v3/services/ad_group_audience_view_service_pb.js"),google_ads_googleads_v3_resources_ad_group_audience_view_pb=require("../../../../../google/ads/googleads/v3/resources/ad_group_audience_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_resources_AdGroupAudienceView(arg){if(!(arg instanceof google_ads_googleads_v3_resources_ad_group_audience_view_pb.AdGroupAudienceView))throw new Error("Expected argument of type google.ads.googleads.v3.resources.AdGroupAudienceView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_AdGroupAudienceView(buffer_arg){return google_ads_googleads_v3_resources_ad_group_audience_view_pb.AdGroupAudienceView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetAdGroupAudienceViewRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetAdGroupAudienceViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetAdGroupAudienceViewRequest(buffer_arg){return google_ads_googleads_v3_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var AdGroupAudienceViewServiceService=exports.AdGroupAudienceViewServiceService={getAdGroupAudienceView:{path:"/google.ads.googleads.v3.services.AdGroupAudienceViewService/GetAdGroupAudienceView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest,responseType:google_ads_googleads_v3_resources_ad_group_audience_view_pb.AdGroupAudienceView,requestSerialize:serialize_google_ads_googleads_v3_services_GetAdGroupAudienceViewRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetAdGroupAudienceViewRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_AdGroupAudienceView,responseDeserialize:deserialize_google_ads_googleads_v3_resources_AdGroupAudienceView}};exports.AdGroupAudienceViewServiceClient=grpc.makeGenericClientConstructor(AdGroupAudienceViewServiceService);