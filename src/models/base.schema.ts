import { Schema, SchemaDefinition, Types } from "mongoose";

export interface IBaseEntity {
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}

export function createBaseSchema<T extends IBaseEntity>(
  fields: SchemaDefinition<T>
) {
  return new Schema<T>(
    {
      ...fields,

      createdBy: {
        type: Schema.Types.ObjectId,
      },

      modifiedBy: {
        type: Schema.Types.ObjectId,
      },
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "modifiedAt",
      },
    },
  );
}