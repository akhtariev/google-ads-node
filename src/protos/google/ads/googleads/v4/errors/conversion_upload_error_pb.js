var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.ConversionUploadError",null,global),proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.displayName="proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum;return proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.ConversionUploadErrorEnum.ConversionUploadError={UNSPECIFIED:0,UNKNOWN:1,TOO_MANY_CONVERSIONS_IN_REQUEST:2,UNPARSEABLE_GCLID:3,CONVERSION_PRECEDES_GCLID:4,EXPIRED_GCLID:5,TOO_RECENT_GCLID:6,GCLID_NOT_FOUND:7,UNAUTHORIZED_CUSTOMER:8,INVALID_CONVERSION_ACTION:9,TOO_RECENT_CONVERSION_ACTION:10,CONVERSION_TRACKING_NOT_ENABLED_AT_IMPRESSION_TIME:11,EXTERNAL_ATTRIBUTION_DATA_SET_FOR_NON_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION:12,EXTERNAL_ATTRIBUTION_DATA_NOT_SET_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION:13,ORDER_ID_NOT_PERMITTED_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION:14,ORDER_ID_ALREADY_IN_USE:15,DUPLICATE_ORDER_ID:16,TOO_RECENT_CALL:17,EXPIRED_CALL:18,CALL_NOT_FOUND:19,CONVERSION_PRECEDES_CALL:20,CONVERSION_TRACKING_NOT_ENABLED_AT_CALL_TIME:21,UNPARSEABLE_CALLERS_PHONE_NUMBER:22},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);