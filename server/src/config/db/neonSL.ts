import { neon } from "@neondatabase/serverless"
import dotenv from "dotenv"
dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = neon(
   process.env.DATABASE_URL
)

async function getPgVersion() {
  const result = await sql `SELECT VERSION()`;
  console.log(result[0])


}

getPgVersion()
