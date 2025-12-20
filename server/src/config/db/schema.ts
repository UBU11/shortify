import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { neon } from "@neondatabase/serverless"
import dotenv from "dotenv"
dotenv.config()


export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({length:255}).notNull(),
  age: integer().notNull(),
  email: varchar({length:255}).notNull().unique(),
});

