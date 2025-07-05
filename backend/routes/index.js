// backend/routes/index.js
import { Router } from 'express';

const router = Router();

// Health-check
router.get('/', (_req, res) => {
  res.json({ ok: true, message: 'Emome API is live' });
});

export default router;
