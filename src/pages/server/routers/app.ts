//this is the root route

import { createRouter } from "../createRouter";
import { nameRouter } from "./names";

export const appRouter = createRouter().merge("names.", nameRouter);

export type AppRouter = typeof appRouter;
