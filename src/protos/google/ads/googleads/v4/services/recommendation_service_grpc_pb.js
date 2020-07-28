"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_recommendation_service_pb=require("../../../../../google/ads/googleads/v4/services/recommendation_service_pb.js"),google_ads_googleads_v4_common_extensions_pb=require("../../../../../google/ads/googleads/v4/common/extensions_pb.js"),google_ads_googleads_v4_enums_keyword_match_type_pb=require("../../../../../google/ads/googleads/v4/enums/keyword_match_type_pb.js"),google_ads_googleads_v4_resources_ad_pb=require("../../../../../google/ads/googleads/v4/resources/ad_pb.js"),google_ads_googleads_v4_resources_recommendation_pb=require("../../../../../google/ads/googleads/v4/resources/recommendation_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_resources_Recommendation(e){if(!(e instanceof google_ads_googleads_v4_resources_recommendation_pb.Recommendation))throw new Error("Expected argument of type google.ads.googleads.v4.resources.Recommendation");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_Recommendation(e){return google_ads_googleads_v4_resources_recommendation_pb.Recommendation.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_ApplyRecommendationRequest(e){if(!(e instanceof google_ads_googleads_v4_services_recommendation_service_pb.ApplyRecommendationRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.ApplyRecommendationRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_ApplyRecommendationRequest(e){return google_ads_googleads_v4_services_recommendation_service_pb.ApplyRecommendationRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_ApplyRecommendationResponse(e){if(!(e instanceof google_ads_googleads_v4_services_recommendation_service_pb.ApplyRecommendationResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.ApplyRecommendationResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_ApplyRecommendationResponse(e){return google_ads_googleads_v4_services_recommendation_service_pb.ApplyRecommendationResponse.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_DismissRecommendationRequest(e){if(!(e instanceof google_ads_googleads_v4_services_recommendation_service_pb.DismissRecommendationRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.DismissRecommendationRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_DismissRecommendationRequest(e){return google_ads_googleads_v4_services_recommendation_service_pb.DismissRecommendationRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_DismissRecommendationResponse(e){if(!(e instanceof google_ads_googleads_v4_services_recommendation_service_pb.DismissRecommendationResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.DismissRecommendationResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_DismissRecommendationResponse(e){return google_ads_googleads_v4_services_recommendation_service_pb.DismissRecommendationResponse.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetRecommendationRequest(e){if(!(e instanceof google_ads_googleads_v4_services_recommendation_service_pb.GetRecommendationRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetRecommendationRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetRecommendationRequest(e){return google_ads_googleads_v4_services_recommendation_service_pb.GetRecommendationRequest.deserializeBinary(new Uint8Array(e))}var RecommendationServiceService=exports.RecommendationServiceService={getRecommendation:{path:"/google.ads.googleads.v4.services.RecommendationService/GetRecommendation",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_recommendation_service_pb.GetRecommendationRequest,responseType:google_ads_googleads_v4_resources_recommendation_pb.Recommendation,requestSerialize:serialize_google_ads_googleads_v4_services_GetRecommendationRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetRecommendationRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_Recommendation,responseDeserialize:deserialize_google_ads_googleads_v4_resources_Recommendation},applyRecommendation:{path:"/google.ads.googleads.v4.services.RecommendationService/ApplyRecommendation",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_recommendation_service_pb.ApplyRecommendationRequest,responseType:google_ads_googleads_v4_services_recommendation_service_pb.ApplyRecommendationResponse,requestSerialize:serialize_google_ads_googleads_v4_services_ApplyRecommendationRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_ApplyRecommendationRequest,responseSerialize:serialize_google_ads_googleads_v4_services_ApplyRecommendationResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_ApplyRecommendationResponse},dismissRecommendation:{path:"/google.ads.googleads.v4.services.RecommendationService/DismissRecommendation",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_recommendation_service_pb.DismissRecommendationRequest,responseType:google_ads_googleads_v4_services_recommendation_service_pb.DismissRecommendationResponse,requestSerialize:serialize_google_ads_googleads_v4_services_DismissRecommendationRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_DismissRecommendationRequest,responseSerialize:serialize_google_ads_googleads_v4_services_DismissRecommendationResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_DismissRecommendationResponse}};exports.RecommendationServiceClient=grpc.makeGenericClientConstructor(RecommendationServiceService);