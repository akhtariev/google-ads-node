/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v0_common_matching_function_pb = require('../../../../../google/ads/googleads/v0/common/matching_function_pb.js');
var google_ads_googleads_v0_enums_feed_link_status_pb = require('../../../../../google/ads/googleads/v0/enums/feed_link_status_pb.js');
var google_ads_googleads_v0_enums_placeholder_type_pb = require('../../../../../google/ads/googleads/v0/enums/placeholder_type_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v0.resources.AdGroupFeed', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v0.resources.AdGroupFeed.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v0.resources.AdGroupFeed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v0.resources.AdGroupFeed.displayName = 'proto.google.ads.googleads.v0.resources.AdGroupFeed';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.resources.AdGroupFeed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupFeed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feed: (f = msg.getFeed()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    adGroup: (f = msg.getAdGroup()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    placeholderTypesList: jspb.Message.getRepeatedField(msg, 4),
    matchingFunction: (f = msg.getMatchingFunction()) && google_ads_googleads_v0_common_matching_function_pb.MatchingFunction.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupFeed}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.resources.AdGroupFeed;
  return proto.google.ads.googleads.v0.resources.AdGroupFeed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupFeed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.resources.AdGroupFeed}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFeed(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAdGroup(value);
      break;
    case 4:
      var value = /** @type {!Array<!proto.google.ads.googleads.v0.enums.PlaceholderTypeEnum.PlaceholderType>} */ (reader.readPackedEnum());
      msg.setPlaceholderTypesList(value);
      break;
    case 5:
      var value = new google_ads_googleads_v0_common_matching_function_pb.MatchingFunction;
      reader.readMessage(value,google_ads_googleads_v0_common_matching_function_pb.MatchingFunction.deserializeBinaryFromReader);
      msg.setMatchingFunction(value);
      break;
    case 6:
      var value = /** @type {!proto.google.ads.googleads.v0.enums.FeedLinkStatusEnum.FeedLinkStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.resources.AdGroupFeed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.resources.AdGroupFeed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAdGroup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPlaceholderTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getMatchingFunction();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_ads_googleads_v0_common_matching_function_pb.MatchingFunction.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue feed = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.getFeed = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.setFeed = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.clearFeed = function() {
  this.setFeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.hasFeed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue ad_group = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.getAdGroup = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.setAdGroup = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.clearAdGroup = function() {
  this.setAdGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.hasAdGroup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated google.ads.googleads.v0.enums.PlaceholderTypeEnum.PlaceholderType placeholder_types = 4;
 * @return {!Array<!proto.google.ads.googleads.v0.enums.PlaceholderTypeEnum.PlaceholderType>}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.getPlaceholderTypesList = function() {
  return /** @type {!Array<!proto.google.ads.googleads.v0.enums.PlaceholderTypeEnum.PlaceholderType>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<!proto.google.ads.googleads.v0.enums.PlaceholderTypeEnum.PlaceholderType>} value */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.setPlaceholderTypesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.google.ads.googleads.v0.enums.PlaceholderTypeEnum.PlaceholderType} value
 * @param {number=} opt_index
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.addPlaceholderTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.clearPlaceholderTypesList = function() {
  this.setPlaceholderTypesList([]);
};


/**
 * optional google.ads.googleads.v0.common.MatchingFunction matching_function = 5;
 * @return {?proto.google.ads.googleads.v0.common.MatchingFunction}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.getMatchingFunction = function() {
  return /** @type{?proto.google.ads.googleads.v0.common.MatchingFunction} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v0_common_matching_function_pb.MatchingFunction, 5));
};


/** @param {?proto.google.ads.googleads.v0.common.MatchingFunction|undefined} value */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.setMatchingFunction = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.clearMatchingFunction = function() {
  this.setMatchingFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.hasMatchingFunction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.ads.googleads.v0.enums.FeedLinkStatusEnum.FeedLinkStatus status = 6;
 * @return {!proto.google.ads.googleads.v0.enums.FeedLinkStatusEnum.FeedLinkStatus}
 */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v0.enums.FeedLinkStatusEnum.FeedLinkStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.ads.googleads.v0.enums.FeedLinkStatusEnum.FeedLinkStatus} value */
proto.google.ads.googleads.v0.resources.AdGroupFeed.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v0.resources);
