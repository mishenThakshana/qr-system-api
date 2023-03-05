import { Request, Response } from "express";
import QrCode from "../models/QrCode.model";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

export const GenerateQrCode = async (req: Request, res: Response) => {
  try {
    await QrCode.create({ code: uuidv4(), createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss") });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const ValidateQrCode = async (req: Request, res: Response) => {
  const { code } = req.body;
  try {
    const qr = await QrCode.findOne({ where: { code } });
    if (qr) {
      await QrCode.destroy({ where: { code } });
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
