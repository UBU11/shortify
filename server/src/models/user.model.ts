import "dotenv/config";
import { eq } from "drizzle-orm";
import { usersTable } from "../config/db/schema.ts";

async function user(db: any, name: string, age: number, email: string) {
  try {
    const user: typeof usersTable = {
      name: name,
      age: age,
      email: email,
    };
    await db.insert(usersTable).values(user);
    console.log("New user added");

    const users = await db.select().from(usersTable);
    console.log("getting users", users);

    await db
      .update(usersTable)
      .set({
        age: 46,
      })
      .where(eq(usersTable.email, user.email));
    console.log("user updated");

    await db.delete(usersTable).where(eq(usersTable.email, user.email));
    console.log("user deleted");
  } catch (error) {
    console.error("Error in user operations:", error);
  }
}

export default user;
