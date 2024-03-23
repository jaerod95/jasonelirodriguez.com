import z from "zod";
import { Types } from "mongoose";

const ZObjectId = z
  .instanceof(Types.ObjectId)
  .transform((val) => val.toString());

export const ZPost = z.object({
  _id: ZObjectId.or(z.string()),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type IPost = z.output<typeof ZPost>;
export type IBPost = z.input<typeof ZPost>;
