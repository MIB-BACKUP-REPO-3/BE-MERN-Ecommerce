import { Schema, SchemaDefinition } from "mongoose";
import { IBaseEntity } from "../interfaces/base-entity.interface";

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