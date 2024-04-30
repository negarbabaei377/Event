import { model, models, Schema, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDAteTime: Date;
  Price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  user: { _id: string; firstname: string; lastname: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});
const Event = models.Event || model("event", EventSchema);
export default Event;
