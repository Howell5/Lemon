import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const projectRouter = router({
  list: publicProcedure.query(({ ctx }) => {
    // console.log('ctx:', ctx)
    // console.log('prisma:', ctx.prisma)
    return ctx.prisma.project.findMany()
  }),
  create: publicProcedure
    .input(z.object({ name: z.string(), description: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.project.create({ data: input })
    }),
})
