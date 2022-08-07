import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export const fetchArt = async (req: NextApiRequest, res: NextApiResponse) => {
  const art = await prisma.art.findMany({});
  res.status(200).json(art);
};

export const postArt = async (req: NextApiRequest, res: NextApiResponse) => {
  const postuser = await prisma.art.create({
    data: {
      title: "artcom",
      description: "lorem ipsum",
      image: "image",
    },
  });
  res.status(200).json(postuser);
};
