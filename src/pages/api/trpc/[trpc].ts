//Here we will implement our tRPC router
//We're passing it our router, our createConext function, enabling batching and logging errors.

import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../server/routers/app";
import { createContext } from "../../server/context";
export default createNextApiHandler({
  router: appRouter,
  createContext,
  batching: {
    enabled: true,
  },
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.log("something went wrong", error);
    }
  },
});
