import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export const fetchArt = async (req: NextApiRequest, res: NextApiResponse) => {
  const art = await prisma.user.findMany({});
  res.status(200).json(art);
};

export const postArt = async (req: NextApiRequest, res: NextApiResponse) => {
  const postuser = await prisma.user.create({
    data: {
      id: 3,
      email: "3@gmail.com",
      name: "2123",
    },
  });
  res.status(200).json(postuser);
};
