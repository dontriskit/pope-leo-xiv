// Import necessary procedures/helpers if they aren't already
import { createCallerFactory, createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod"; // Import zod if needed

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // Add a dummy procedure to ensure the router isn't empty
  healthcheck: publicProcedure
    .input(z.void()) // Optional input validation
    .query(() => {
      return "ok"; // Simple query returning a string
    }),
  // Add other routers here if needed in the future
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);