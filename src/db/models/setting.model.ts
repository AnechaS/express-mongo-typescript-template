import mongoose from 'mongoose';

export const SettingSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      maxlength: 255,
      index: true,
      trim: true,
      unique: true,
      required: true,
    },
    value: {
      type: String,
      maxlength: 255,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Setting', SettingSchema);
