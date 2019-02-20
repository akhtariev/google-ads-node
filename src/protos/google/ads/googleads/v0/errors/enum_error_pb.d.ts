// package: google.ads.googleads.v0.errors
// file: google/ads/googleads/v0/errors/enum_error.proto

import * as jspb from "google-protobuf";

export class EnumErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: EnumErrorEnum): EnumErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumErrorEnum;
  static deserializeBinaryFromReader(message: EnumErrorEnum, reader: jspb.BinaryReader): EnumErrorEnum;
}

export namespace EnumErrorEnum {
  export type AsObject = {
  }

  export enum EnumError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENUM_VALUE_NOT_PERMITTED = 3,
  }
}

