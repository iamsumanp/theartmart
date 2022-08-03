//trpc uses query and mutations
//query is used  for fetching data
//mutation isused for CUD(from CRUD)
//Here we are creating a query to get a name. The name of our query is getName
//here, input takes the user input which is validated using zod. When this endpoint is requested, the resolve function is called and it returns the hello world greeting. because why not.

import { z } from "zod";

import { createRouter } from "../createRouter";

export const nameRouter = createRouter().query("getName", {
  input: z
    .object({
      name: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return { greeting: `Hello ${input?.name ?? "world"}!` };
  },
});
