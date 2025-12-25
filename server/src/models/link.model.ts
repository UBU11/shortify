import "dotenv/config";
import { eq } from "drizzle-orm";
import { urlsTable } from "../config/db/schema";
import { url } from "node:inspector";

type longUrl = {
  url: any;
  db: any;
  expireAt?: any;
};

const now = Date.now();

async function longUrl({ url, db, expireAt }: longUrl) {
  try {
    const longUrl: typeof urlsTable = {
      originalUrl: url,
      expire_at: now + expireAt,
    };

    await db.insert(urlsTable).values(longUrl);
    console.log("New URL added");

    await db
      .delete(urlsTable)
      .where(eq(urlsTable.originalUrl, longUrl.originalUrl));
    console.log("URL deleted");

    await db.insert;
  } catch (error) {
    console.error("Error in URL operations:", error);
  }
}

export default longUrl;
