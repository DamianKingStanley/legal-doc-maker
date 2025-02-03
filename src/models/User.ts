import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  documentCount: number;
  isSubscribed: boolean;
}

const UserSchema: Schema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  documentCount: { type: Number, default: 0 },
  isSubscribed: { type: Boolean, default: false },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
