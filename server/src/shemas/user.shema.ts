
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  password: mongoose.SchemaTypes.ObjectId,
});
