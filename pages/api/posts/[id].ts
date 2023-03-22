import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.post.findUnique({
        where: {
          id: req.query.id as string,
        },
        include: {
          user: true,
          comments: {
            include: {
              user: true,
            },
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) {
        const { message } = err;
        res.status(500).json({ message });
      }
    }
  }
}
