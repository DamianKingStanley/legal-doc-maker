import mongoose, { Document, Schema } from "mongoose";

// Define the Document interface
export interface IDocument extends Document {
  user: mongoose.Types.ObjectId;
  template: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for the Document
const documentSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    template: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// If the model already exists, use the existing one; otherwise, create a new one
export default mongoose.models.Document ||
  mongoose.model<IDocument>("Document", documentSchema);
