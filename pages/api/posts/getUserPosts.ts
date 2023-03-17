import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "please login first" });
    }
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user?.email!,
        },
        include: {
          posts: {
            include: {
              user: true,
              comments: true,
            },
          },
          comments: true,
        },
      });
      if (!user) {
        res.status(404).json({ message: "user not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
}
