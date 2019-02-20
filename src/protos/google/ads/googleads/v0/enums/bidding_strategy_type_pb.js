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

goog.exportSymbol('proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.BiddingStrategyType', null, global);

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
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.displayName = 'proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum';
}


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
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum}
 */
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum;
  return proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum}
 */
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v0.enums.BiddingStrategyTypeEnum.BiddingStrategyType = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  ENHANCED_CPC: 2,
  MANUAL_CPC: 3,
  MANUAL_CPM: 4,
  MANUAL_CPV: 13,
  MAXIMIZE_CONVERSIONS: 10,
  MAXIMIZE_CONVERSION_VALUE: 11,
  PAGE_ONE_PROMOTED: 5,
  PERCENT_CPC: 12,
  TARGET_CPA: 6,
  TARGET_CPM: 14,
  TARGET_OUTRANK_SHARE: 7,
  TARGET_ROAS: 8,
  TARGET_SPEND: 9
};

goog.object.extend(exports, proto.google.ads.googleads.v0.enums);
