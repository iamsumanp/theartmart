import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { inferAsyncReturnType } from "@trpc/server";

export async function createContext(ctxOptions?: CreateNextContextOptions) {
  const req = ctxOptions?.req;
  const res = ctxOptions?.res;
  return {
    req,
    res,
  };
}
export type MyContextType = inferAsyncReturnType<typeof createContext>;

//this will be availble as ctx in all our resolvers
//we are passing reqand res to all our routes
//we can also add jwt tokens, cookies or even prisma client code
