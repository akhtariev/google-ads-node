"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_conversion_upload_service_pb=require("../../../../../google/ads/googleads/v4/services/conversion_upload_service_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_services_UploadCallConversionsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_conversion_upload_service_pb.UploadCallConversionsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.UploadCallConversionsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_UploadCallConversionsRequest(e){return google_ads_googleads_v4_services_conversion_upload_service_pb.UploadCallConversionsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_UploadCallConversionsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_conversion_upload_service_pb.UploadCallConversionsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.UploadCallConversionsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_UploadCallConversionsResponse(e){return google_ads_googleads_v4_services_conversion_upload_service_pb.UploadCallConversionsResponse.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_UploadClickConversionsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_conversion_upload_service_pb.UploadClickConversionsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.UploadClickConversionsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_UploadClickConversionsRequest(e){return google_ads_googleads_v4_services_conversion_upload_service_pb.UploadClickConversionsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_UploadClickConversionsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_conversion_upload_service_pb.UploadClickConversionsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.UploadClickConversionsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_UploadClickConversionsResponse(e){return google_ads_googleads_v4_services_conversion_upload_service_pb.UploadClickConversionsResponse.deserializeBinary(new Uint8Array(e))}var ConversionUploadServiceService=exports.ConversionUploadServiceService={uploadClickConversions:{path:"/google.ads.googleads.v4.services.ConversionUploadService/UploadClickConversions",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_conversion_upload_service_pb.UploadClickConversionsRequest,responseType:google_ads_googleads_v4_services_conversion_upload_service_pb.UploadClickConversionsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_UploadClickConversionsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_UploadClickConversionsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_UploadClickConversionsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_UploadClickConversionsResponse},uploadCallConversions:{path:"/google.ads.googleads.v4.services.ConversionUploadService/UploadCallConversions",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_conversion_upload_service_pb.UploadCallConversionsRequest,responseType:google_ads_googleads_v4_services_conversion_upload_service_pb.UploadCallConversionsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_UploadCallConversionsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_UploadCallConversionsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_UploadCallConversionsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_UploadCallConversionsResponse}};exports.ConversionUploadServiceClient=grpc.makeGenericClientConstructor(ConversionUploadServiceService);