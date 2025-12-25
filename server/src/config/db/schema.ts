import {
  integer,
  pgTable,
  varchar,
  bigint,
  timestamp,
} from "drizzle-orm/pg-core";
import dotenv from "dotenv";
import { sql } from "drizzle-orm";
dotenv.config();

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const urlsTable = pgTable("urls", {
  urlId: bigint({ mode: "bigint" })
    .primaryKey()
    .generatedByDefaultAsIdentity()
    .notNull(),
  userId: integer("user_id").references(() => usersTable.id),
  originalUrl: varchar({ length: 2048 }).notNull(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  expire_at: timestamp("expire_at", { mode: "date" })
    .default(sql`now() + interval '30 days'`)
    .notNull(),
  updated_at: timestamp(),
  deleted_at: timestamp(),
});
