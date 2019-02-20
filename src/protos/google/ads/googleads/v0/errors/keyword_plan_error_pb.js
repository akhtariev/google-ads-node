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

goog.exportSymbol('proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.KeywordPlanError', null, global);

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
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.displayName = 'proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum';
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
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum}
 */
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum;
  return proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum}
 */
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v0.errors.KeywordPlanErrorEnum.KeywordPlanError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  BID_MULTIPLIER_OUT_OF_RANGE: 2,
  BID_TOO_HIGH: 3,
  BID_TOO_LOW: 4,
  BID_TOO_MANY_FRACTIONAL_DIGITS: 5,
  DAILY_BUDGET_TOO_LOW: 6,
  DAILY_BUDGET_TOO_MANY_FRACTIONAL_DIGITS: 7,
  INVALID_VALUE: 8,
  KEYWORD_PLAN_HAS_NO_KEYWORDS: 9,
  KEYWORD_PLAN_NOT_ENABLED: 10,
  KEYWORD_PLAN_NOT_FOUND: 11,
  MISSING_BID: 13,
  MISSING_FORECAST_PERIOD: 14,
  INVALID_FORECAST_DATE_RANGE: 15,
  INVALID_NAME: 16
};

goog.object.extend(exports, proto.google.ads.googleads.v0.errors);
