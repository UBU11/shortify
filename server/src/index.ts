
import Fastify from 'fastify'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from "@neondatabase/serverless"
import dotenv from "dotenv"
import user from '../helpers/user.model.ts'
dotenv.config()

const sql = neon(
 process.env.DATABASE_URL! as string
)

const db = drizzle({client:sql})

user(db)

const fastify = Fastify({
  logger: true
})


fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})


fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

})

