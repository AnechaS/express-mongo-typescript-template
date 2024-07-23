import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    username: {
      type: String,
      maxlength: 10,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);
