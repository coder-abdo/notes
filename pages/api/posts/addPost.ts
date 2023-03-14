import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "access denied" });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email!,
      },
    });
    const { title } = req.body;
    if (!title.length || title.length > 300) {
      return res.status(400).json({
        message: "title should not be empty and not exceed than 300 words",
      });
    }
    try {
      const result = await prisma?.post.create({
        data: {
          title,
          userId: user?.id,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
}
