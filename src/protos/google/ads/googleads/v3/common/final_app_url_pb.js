var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_app_url_operating_system_type_pb=require("../../../../../google/ads/googleads/v3/enums/app_url_operating_system_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.common.FinalAppUrl",null,global),proto.google.ads.googleads.v3.common.FinalAppUrl=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.common.FinalAppUrl,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.common.FinalAppUrl.displayName="proto.google.ads.googleads.v3.common.FinalAppUrl"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.common.FinalAppUrl.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.common.FinalAppUrl.toObject=function(includeInstance,msg){var f,obj={osType:jspb.Message.getFieldWithDefault(msg,1,0),url:(f=msg.getUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.common.FinalAppUrl.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.common.FinalAppUrl;return proto.google.ads.googleads.v3.common.FinalAppUrl.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.common.FinalAppUrl.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setOsType(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setUrl(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.common.FinalAppUrl.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.common.FinalAppUrl.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getOsType())&&writer.writeEnum(1,f),null!=(f=message.getUrl())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.getOsType=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.setOsType=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.getUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.setUrl=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.clearUrl=function(){this.setUrl(void 0)},proto.google.ads.googleads.v3.common.FinalAppUrl.prototype.hasUrl=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v3.common);