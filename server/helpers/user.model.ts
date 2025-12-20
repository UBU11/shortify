import "dotenv/config"
import {eq} from "drizzle-orm";
import { usersTable } from "../src/config/db/schema.ts";

async function user(db:any) {
 try {
  const user: typeof usersTable = {
   name: "john wick",
   age:45,
   email:"killer@john.com"
  }
  await db.insert(usersTable).values(user);
  console.log("New user added");

  const users = await db.select().from(usersTable)
   console.log("getting users", users);

   await db.update(usersTable).set({
     age:46,
   }).where(eq(usersTable.email, user.email));
   console.log("user updated");

   await db.delete(usersTable).where(eq(usersTable.email, user.email));
   console.log("user deleted");

 } catch (error) {
  console.error("Error in user operations:", error);
 }
}

export default user;
