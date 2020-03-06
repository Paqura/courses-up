
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  password: String,

  created: {
    type: Date,
    default: Date.now,
  },
});
