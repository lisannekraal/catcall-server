const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DB_ATLAS_URL;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const modSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  canAdd: {
    type: Boolean,
    default: false
  }
});

const Moderator = mongoose.model('Moderator', modSchema);

(async () => {
  let hashPassword = await bcrypt.hash('test', 10);
  await Moderator.create({ email: 'admin2', password: hashPassword, canAdd: true });
  mongoose.connection.close();
})();
