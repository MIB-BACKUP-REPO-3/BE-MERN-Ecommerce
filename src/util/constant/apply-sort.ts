import type { Query } from "mongoose";

function applySort<T>(query: Query<T[], T>, sort?: Record<string, 1 | -1>) {
  if (sort) {
    query.sort(sort);
  }

  return query;
}
