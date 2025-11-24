import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/vender/db";
import { User } from "@prisma/client";

/**
 * Retrieves the current user from the database using the session information obtained from the`getServerSession`next-auth function.
 *
 * @returns The current user object if found, otherwise null.
 */
export default async function getCurrentUser(): Promise<User | null> {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
