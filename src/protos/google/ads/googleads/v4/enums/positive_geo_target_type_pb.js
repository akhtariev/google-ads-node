var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType",null,global),proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.displayName="proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.toObject=function(o,e){var g={};return o&&(g.$jspbMessageInstance=e),g}),proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),g=new proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum;return proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.deserializeBinaryFromReader(g,e)},proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType={UNSPECIFIED:0,UNKNOWN:1,PRESENCE_OR_INTEREST:5,SEARCH_INTEREST:6,PRESENCE:7},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);