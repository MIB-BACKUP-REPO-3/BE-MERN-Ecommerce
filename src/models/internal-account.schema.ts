import { model, Types } from "mongoose";
import { createBaseSchema } from "./base.schema.js";
import type { IInternalAccount } from "../interfaces/model/internal-account.interface.js";
import type { InternalAccountRole } from "../types/internal-account.type.js";

export const InternalAccountSchema = createBaseSchema<IInternalAccount>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  contactNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  role: {
    type: String,
    enum: ["admin", "employee"],
    required: true,
  },

  status: {
    type: String,
    enum: ["active", "inactive", "suspended"],
    default: "active",
    required: true,
  },

  lastLoginAt: {
    type: Date,
    default: null,
  },
});
InternalAccountSchema.pre("save", async function () {
  if (!this.isNew && this.isModified("role")) {
    throw new Error("Account role cannot be changed");
  }

  if (this.role === "admin") {
    const existingAdmin = await this.model("InternalAccount").findOne({
      role: "admin",
      _id: { $ne: this._id },
    });

    if (existingAdmin) {
      throw new Error("Only one admin account can exist");
    }
  }
});

InternalAccountSchema.pre("findOneAndUpdate", async function () {
  const update = this.getUpdate() as {
    role?: InternalAccountRole;
    $set?: {
      role?: InternalAccountRole;
    };
  };

  const newRole = update?.role ?? update?.$set?.role;

  if (!newRole) {
    return;
  }

  const account = await this.model.findOne(this.getQuery());

  if (!account) {
    return;
  }

  if (account.role !== newRole) {
    throw new Error("Account role cannot be changed");
  }
});


InternalAccountSchema.index(
  { role: 1 },
  {
    unique: true,
    partialFilterExpression: { role: "admin" },
  },
);

export const InternalAccount = model<IInternalAccount>(
  "InternalAccount",
  InternalAccountSchema,
);
