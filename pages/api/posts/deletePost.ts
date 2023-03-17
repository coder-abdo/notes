import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "please login first" });
  }
  if (req.method === "DELETE") {
    const postId = req.body.id;
    try {
      const result = await prisma.post.delete({
        where: {
          id: postId,
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
