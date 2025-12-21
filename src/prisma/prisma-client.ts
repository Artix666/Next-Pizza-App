import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Создаём PrismaClient один раз в глобальном объекте
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "error"], // опционально для отладки
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
