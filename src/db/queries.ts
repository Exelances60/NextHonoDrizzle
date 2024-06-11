import { db } from "@/db/db";
import { InsertUser, usersTable } from "@/db/schema";

export const createUser = async (data: InsertUser) => {
  console.log(data);
  await db.insert(usersTable).values(data);
};
