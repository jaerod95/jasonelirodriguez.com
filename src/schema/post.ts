import mongoose, {
  Model,
  Schema,
  SchemaDefinition,
  SchemaDefinitionType,
  model,
} from "mongoose";
import { IBPost } from "./post.types";

type PostSchema = IBPost;
type PostQueryHelpers = {};
type PostMethods = {};
type PostVirtuals = {};

export type PostModel = Model<
  PostSchema,
  PostQueryHelpers,
  PostMethods,
  PostVirtuals
>;

const definition: SchemaDefinition<SchemaDefinitionType<PostSchema>> = {
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
};

const schema = new Schema<PostSchema, PostModel, PostMethods, PostQueryHelpers>(
  definition,
  { minimize: false, timestamps: true }
);

schema.index({ createdAt: 1 });
schema.index({ title: 1 });
schema.index({ title: 1, createdAt: 1 });

export default (mongoose.models.Post as PostModel) ||
  model<PostSchema, PostModel>("Post", schema);
