var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.FeedMappingError",null,global),proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.displayName="proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum;return proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.FeedMappingError={UNSPECIFIED:0,UNKNOWN:1,INVALID_PLACEHOLDER_FIELD:2,INVALID_CRITERION_FIELD:3,INVALID_PLACEHOLDER_TYPE:4,INVALID_CRITERION_TYPE:5,NO_ATTRIBUTE_FIELD_MAPPINGS:7,FEED_ATTRIBUTE_TYPE_MISMATCH:8,CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED:9,MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE:10,MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE:11,MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD:12,MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD:13,UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS:14,LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS:15,CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED:16,INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED:17,INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE:18},goog.object.extend(exports,proto.google.ads.googleads.v2.errors);