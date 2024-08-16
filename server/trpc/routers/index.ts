// src/server/trpc/routers.ts
import { projectRouter } from './project'
import { router } from '~/server/trpc/trpc'

export const appRouter = router({
  project: projectRouter,
})

export type AppRouter = typeof appRouter
