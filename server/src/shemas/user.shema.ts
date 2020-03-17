
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from 'src/interfaces/user.interface';

export const UserSchema = new mongoose.Schema<User>({
  name: String,
  password: String,

  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre<mongoose.Document & User>('save', async function(
  next: mongoose.HookNextFunction,
) {
  try {
    if (!this.isModified) {
      return next();
    }

    const hashedPsw = await bcrypt.hash(this.password, 10);
    this.password = hashedPsw;

    return next();
  } catch (error) {
    return next(error);
  }
});
