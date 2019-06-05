"use strict";var grpc=require("grpc"),google_ads_googleads_v1_services_expanded_landing_page_view_service_pb=require("../../../../../google/ads/googleads/v1/services/expanded_landing_page_view_service_pb.js"),google_ads_googleads_v1_resources_expanded_landing_page_view_pb=require("../../../../../google/ads/googleads/v1/resources/expanded_landing_page_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");function serialize_google_ads_googleads_v1_resources_ExpandedLandingPageView(arg){if(!(arg instanceof google_ads_googleads_v1_resources_expanded_landing_page_view_pb.ExpandedLandingPageView))throw new Error("Expected argument of type google.ads.googleads.v1.resources.ExpandedLandingPageView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_resources_ExpandedLandingPageView(buffer_arg){return google_ads_googleads_v1_resources_expanded_landing_page_view_pb.ExpandedLandingPageView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_GetExpandedLandingPageViewRequest(arg){if(!(arg instanceof google_ads_googleads_v1_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest))throw new Error("Expected argument of type google.ads.googleads.v1.services.GetExpandedLandingPageViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_GetExpandedLandingPageViewRequest(buffer_arg){return google_ads_googleads_v1_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var ExpandedLandingPageViewServiceService=exports.ExpandedLandingPageViewServiceService={getExpandedLandingPageView:{path:"/google.ads.googleads.v1.services.ExpandedLandingPageViewService/GetExpandedLandingPageView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v1_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest,responseType:google_ads_googleads_v1_resources_expanded_landing_page_view_pb.ExpandedLandingPageView,requestSerialize:serialize_google_ads_googleads_v1_services_GetExpandedLandingPageViewRequest,requestDeserialize:deserialize_google_ads_googleads_v1_services_GetExpandedLandingPageViewRequest,responseSerialize:serialize_google_ads_googleads_v1_resources_ExpandedLandingPageView,responseDeserialize:deserialize_google_ads_googleads_v1_resources_ExpandedLandingPageView}};exports.ExpandedLandingPageViewServiceClient=grpc.makeGenericClientConstructor(ExpandedLandingPageViewServiceService);