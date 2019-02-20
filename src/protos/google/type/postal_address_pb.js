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

goog.exportSymbol('proto.google.type.PostalAddress', null, global);

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
proto.google.type.PostalAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.type.PostalAddress.repeatedFields_, null);
};
goog.inherits(proto.google.type.PostalAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.type.PostalAddress.displayName = 'proto.google.type.PostalAddress';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.type.PostalAddress.repeatedFields_ = [9,10];



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
proto.google.type.PostalAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.google.type.PostalAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.type.PostalAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.PostalAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    revision: jspb.Message.getFieldWithDefault(msg, 1, 0),
    regionCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sortingCode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    administrativeArea: jspb.Message.getFieldWithDefault(msg, 6, ""),
    locality: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sublocality: jspb.Message.getFieldWithDefault(msg, 8, ""),
    addressLinesList: jspb.Message.getRepeatedField(msg, 9),
    recipientsList: jspb.Message.getRepeatedField(msg, 10),
    organization: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.google.type.PostalAddress}
 */
proto.google.type.PostalAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.type.PostalAddress;
  return proto.google.type.PostalAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.type.PostalAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.type.PostalAddress}
 */
proto.google.type.PostalAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRevision(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSortingCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdministrativeArea(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocality(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSublocality(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddressLines(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
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
proto.google.type.PostalAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.type.PostalAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.type.PostalAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.type.PostalAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRevision();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRegionCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSortingCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAdministrativeArea();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLocality();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSublocality();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAddressLinesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional int32 revision = 1;
 * @return {number}
 */
proto.google.type.PostalAddress.prototype.getRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.type.PostalAddress.prototype.setRevision = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string region_code = 2;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getRegionCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setRegionCode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postal_code = 4;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setPostalCode = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sorting_code = 5;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getSortingCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setSortingCode = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string administrative_area = 6;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getAdministrativeArea = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setAdministrativeArea = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string locality = 7;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getLocality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setLocality = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sublocality = 8;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getSublocality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setSublocality = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string address_lines = 9;
 * @return {!Array<string>}
 */
proto.google.type.PostalAddress.prototype.getAddressLinesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<string>} value */
proto.google.type.PostalAddress.prototype.setAddressLinesList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.type.PostalAddress.prototype.addAddressLines = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


proto.google.type.PostalAddress.prototype.clearAddressLinesList = function() {
  this.setAddressLinesList([]);
};


/**
 * repeated string recipients = 10;
 * @return {!Array<string>}
 */
proto.google.type.PostalAddress.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array<string>} value */
proto.google.type.PostalAddress.prototype.setRecipientsList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.type.PostalAddress.prototype.addRecipients = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.google.type.PostalAddress.prototype.clearRecipientsList = function() {
  this.setRecipientsList([]);
};


/**
 * optional string organization = 11;
 * @return {string}
 */
proto.google.type.PostalAddress.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.google.type.PostalAddress.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


goog.object.extend(exports, proto.google.type);
