"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_video_service_pb=require("../../../../../google/ads/googleads/v4/services/video_service_pb.js"),google_ads_googleads_v4_resources_video_pb=require("../../../../../google/ads/googleads/v4/resources/video_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_Video(e){if(!(e instanceof google_ads_googleads_v4_resources_video_pb.Video))throw new Error("Expected argument of type google.ads.googleads.v4.resources.Video");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_Video(e){return google_ads_googleads_v4_resources_video_pb.Video.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetVideoRequest(e){if(!(e instanceof google_ads_googleads_v4_services_video_service_pb.GetVideoRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetVideoRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetVideoRequest(e){return google_ads_googleads_v4_services_video_service_pb.GetVideoRequest.deserializeBinary(new Uint8Array(e))}var VideoServiceService=exports.VideoServiceService={getVideo:{path:"/google.ads.googleads.v4.services.VideoService/GetVideo",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_video_service_pb.GetVideoRequest,responseType:google_ads_googleads_v4_resources_video_pb.Video,requestSerialize:serialize_google_ads_googleads_v4_services_GetVideoRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetVideoRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_Video,responseDeserialize:deserialize_google_ads_googleads_v4_resources_Video}};exports.VideoServiceClient=grpc.makeGenericClientConstructor(VideoServiceService);