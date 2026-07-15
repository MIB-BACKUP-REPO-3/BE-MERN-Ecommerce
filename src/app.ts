import express from "express";
import router from "./routes/api.router";
import { errorHandler } from "./middleware/error-handler.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

const app = express();

app.use(express.json());
app.use(router)
app.use(notFoundHandler);
app.use(errorHandler);

export default app;