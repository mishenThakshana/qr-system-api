import { Router } from "express";
import { GenerateQrCode, ValidateQrCode } from "../controllers/Qr.controller";

const router = Router();

router.post("/generate-qr", GenerateQrCode);
router.post("/validate-qr", ValidateQrCode);

export default router;
