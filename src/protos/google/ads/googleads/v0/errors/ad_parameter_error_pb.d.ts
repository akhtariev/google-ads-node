// package: google.ads.googleads.v0.errors
// file: google/ads/googleads/v0/errors/ad_parameter_error.proto

import * as jspb from "google-protobuf";

export class AdParameterErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdParameterErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdParameterErrorEnum): AdParameterErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdParameterErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdParameterErrorEnum;
  static deserializeBinaryFromReader(message: AdParameterErrorEnum, reader: jspb.BinaryReader): AdParameterErrorEnum;
}

export namespace AdParameterErrorEnum {
  export type AsObject = {
  }

  export enum AdParameterError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_GROUP_CRITERION_MUST_BE_KEYWORD = 2,
    INVALID_INSERTION_TEXT_FORMAT = 3,
  }
}

