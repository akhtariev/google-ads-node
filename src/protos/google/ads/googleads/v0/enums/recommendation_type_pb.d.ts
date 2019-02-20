// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/recommendation_type.proto

import * as jspb from "google-protobuf";

export class RecommendationTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationTypeEnum): RecommendationTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendationTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationTypeEnum;
  static deserializeBinaryFromReader(message: RecommendationTypeEnum, reader: jspb.BinaryReader): RecommendationTypeEnum;
}

export namespace RecommendationTypeEnum {
  export type AsObject = {
  }

  export enum RecommendationType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CAMPAIGN_BUDGET = 2,
    KEYWORD = 3,
    TEXT_AD = 4,
    TARGET_CPA_OPT_IN = 5,
    MAXIMIZE_CONVERSIONS_OPT_IN = 6,
    ENHANCED_CPC_OPT_IN = 7,
    SEARCH_PARTNERS_OPT_IN = 8,
    MAXIMIZE_CLICKS_OPT_IN = 9,
    OPTIMIZE_AD_ROTATION = 10,
  }
}

