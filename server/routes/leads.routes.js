import express from "express";
import {
  createLead,
  getAllLeads,
  updateLeadStatus
} from "../controllers/leads.controller.js";

const router = express.Router();

router.post("/", createLead);
router.get("/", getAllLeads);
router.patch("/:id/status", updateLeadStatus);

export default router;