// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/customer_match_upload_key_type.proto

import * as jspb from "google-protobuf";

export class CustomerMatchUploadKeyTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerMatchUploadKeyTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerMatchUploadKeyTypeEnum): CustomerMatchUploadKeyTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerMatchUploadKeyTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerMatchUploadKeyTypeEnum;
  static deserializeBinaryFromReader(message: CustomerMatchUploadKeyTypeEnum, reader: jspb.BinaryReader): CustomerMatchUploadKeyTypeEnum;
}

export namespace CustomerMatchUploadKeyTypeEnum {
  export type AsObject = {
  }

  export enum CustomerMatchUploadKeyType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CONTACT_INFO = 2,
    CRM_ID = 3,
    MOBILE_ADVERTISING_ID = 4,
  }
}

