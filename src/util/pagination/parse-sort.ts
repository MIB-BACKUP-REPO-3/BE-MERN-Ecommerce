import type { ISort } from "../../interface/common/sort.interface.js";
import { SortDirection } from "../constant/constants.js";

export function parseSort(value: unknown): ISort[] | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  return value.split(",").map((item) => {
    const [field, direction] = item.split(":");

    if (!field) {
      throw new Error("Invalid sort field");
    }

    return {
      field,
      direction:
        direction?.toUpperCase() === SortDirection.DESC
          ? SortDirection.DESC
          : SortDirection.ASC,
    };
  });
}