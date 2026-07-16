import { Schema, type SchemaDefinition } from "mongoose";
import type { IBaseEntity } from "../interface/model/base-entity.interface.js";

export function createBaseSchema<T extends IBaseEntity>(
  fields: SchemaDefinition<T>
): Schema<T> {
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