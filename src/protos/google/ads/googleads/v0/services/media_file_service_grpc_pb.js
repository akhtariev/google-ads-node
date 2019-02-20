// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var google_ads_googleads_v0_services_media_file_service_pb = require('../../../../../google/ads/googleads/v0/services/media_file_service_pb.js');
var google_ads_googleads_v0_resources_media_file_pb = require('../../../../../google/ads/googleads/v0/resources/media_file_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_MediaFile(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_media_file_pb.MediaFile)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.MediaFile');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_MediaFile(buffer_arg) {
  return google_ads_googleads_v0_resources_media_file_pb.MediaFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetMediaFileRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_media_file_service_pb.GetMediaFileRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetMediaFileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetMediaFileRequest(buffer_arg) {
  return google_ads_googleads_v0_services_media_file_service_pb.GetMediaFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateMediaFilesRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_media_file_service_pb.MutateMediaFilesRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateMediaFilesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateMediaFilesRequest(buffer_arg) {
  return google_ads_googleads_v0_services_media_file_service_pb.MutateMediaFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateMediaFilesResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_media_file_service_pb.MutateMediaFilesResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateMediaFilesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateMediaFilesResponse(buffer_arg) {
  return google_ads_googleads_v0_services_media_file_service_pb.MutateMediaFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage media files.
var MediaFileServiceService = exports.MediaFileServiceService = {
  // Returns the requested media file in full detail.
  getMediaFile: {
    path: '/google.ads.googleads.v0.services.MediaFileService/GetMediaFile',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_media_file_service_pb.GetMediaFileRequest,
    responseType: google_ads_googleads_v0_resources_media_file_pb.MediaFile,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetMediaFileRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetMediaFileRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_MediaFile,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_MediaFile,
  },
  // Creates media files. Operation statuses are returned.
  mutateMediaFiles: {
    path: '/google.ads.googleads.v0.services.MediaFileService/MutateMediaFiles',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_media_file_service_pb.MutateMediaFilesRequest,
    responseType: google_ads_googleads_v0_services_media_file_service_pb.MutateMediaFilesResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateMediaFilesRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateMediaFilesRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateMediaFilesResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateMediaFilesResponse,
  },
};

exports.MediaFileServiceClient = grpc.makeGenericClientConstructor(MediaFileServiceService);
