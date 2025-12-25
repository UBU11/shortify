import "dotenv/config";
import { eq } from "drizzle-orm";
import { urlsTable } from "../config/db/schema";

async function longUrl(url: any, db: any): Promise<void> {
  try {
    const longUrl: typeof urlsTable = {
      originalUrl: url,
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
