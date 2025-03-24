// src/routes/aiChat.ts
import express from 'express';
import { verifyToken } from '../middleware/auth';
import aiChatController from '../controllers/aiChatController';

const router = express.Router();

/**
 * @swagger
 * /api/ai/ai-chat:
 *   post:
 *     summary: Chat with the AI health assistant
 *     description: >
 *       Sends a user message to the AI chat assistant specialized in diabetes management.
 *       The assistant responds with tailored advice. Note that the assistant is not a replacement for professional medical care.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *             required:
 *               - message
 *     responses:
 *       200:
 *         description: AI response returned successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *       400:
 *         description: Message is required.
 *       500:
 *         description: Error processing your request.
 */
router.post('/ai-chat', verifyToken, (req, res) => aiChatController.handleChat(req, res));

export default router;
