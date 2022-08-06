// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   let globalWithPrisma = global as typeof globalThis & {
//     prisma: PrismaClient;
//   };
//   if (!globalWithPrisma.prisma) {
//     globalWithPrisma.prisma = new PrismaClient();
//   }
//   prisma = globalWithPrisma.prisma;
// }

// export default prisma;

//if this error belows occurs //? fix this file
//However, TS does not like the use of var (Unexpected var, use let or const instead.). When I change it to either be let or const, the global.prisma error becomes:

// import { Prisma, PrismaClient } from "@prisma/client";

// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient;
//     }
//   }
// }

// let prisma: PrismaClient;

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }

//     prisma = global.prisma;
//   }
// }

// export default prisma;

import { PrismaClient } from "@prisma/client";
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}
//@ts-ignore
export default prisma;
