import { PrismaClient } from "@prisma/client";

// The function is a singleton, It will always return the same instance of the PrismaClient, unless it has been explicitly recreated.
// access the PrismaClient instance throughout application life cycle
const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
