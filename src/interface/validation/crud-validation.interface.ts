import type { ZodType } from "zod";

export interface ICrudValidation {
  create?: ZodType;
  update?: ZodType;
  params?: ZodType;
  filters?: ZodType;
}
