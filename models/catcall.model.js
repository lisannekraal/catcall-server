const mongoose = require('./index');

const catcallSchema = new mongoose.Schema({
  type: String,
  geometry: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: [Number]
  },
  properties: {
    quote: String,
    context: String,
    dateCatcall: String,
    dateAdded: String,
    url: String,
    verified: Boolean,
    chalked: Boolean,
    listedForChalk: Boolean,
    starred: Boolean,
    trash: Boolean,
    categories: [String],
    votes: Number
  }
});

module.exports = mongoose.model('Catcall', catcallSchema);