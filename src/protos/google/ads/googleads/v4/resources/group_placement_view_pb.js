var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_placement_type_pb=require("../../../../../google/ads/googleads/v4/enums/placement_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_placement_type_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.GroupPlacementView",null,global),proto.google.ads.googleads.v4.resources.GroupPlacementView=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.GroupPlacementView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.GroupPlacementView.displayName="proto.google.ads.googleads.v4.resources.GroupPlacementView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.GroupPlacementView.toObject(e,this)},proto.google.ads.googleads.v4.resources.GroupPlacementView.toObject=function(e,o){var r,t={resourceName:jspb.Message.getFieldWithDefault(o,1,""),placement:(r=o.getPlacement())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),displayName:(r=o.getDisplayName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),targetUrl:(r=o.getTargetUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),placementType:jspb.Message.getFieldWithDefault(o,5,0)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.resources.GroupPlacementView.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.GroupPlacementView;return proto.google.ads.googleads.v4.resources.GroupPlacementView.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.GroupPlacementView.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setPlacement(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setDisplayName(r);break;case 4:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setTargetUrl(r);break;case 5:r=o.readEnum();e.setPlacementType(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.GroupPlacementView.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.GroupPlacementView.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getPlacement())&&o.writeMessage(2,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getDisplayName())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getTargetUrl())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(r=e.getPlacementType())&&o.writeEnum(5,r)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.getPlacement=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.setPlacement=function(e){return jspb.Message.setWrapperField(this,2,e)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.clearPlacement=function(){return this.setPlacement(void 0)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.hasPlacement=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.getDisplayName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.setDisplayName=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.clearDisplayName=function(){return this.setDisplayName(void 0)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.hasDisplayName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.getTargetUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.setTargetUrl=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.clearTargetUrl=function(){return this.setTargetUrl(void 0)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.hasTargetUrl=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.getPlacementType=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v4.resources.GroupPlacementView.prototype.setPlacementType=function(e){return jspb.Message.setProto3EnumField(this,5,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);