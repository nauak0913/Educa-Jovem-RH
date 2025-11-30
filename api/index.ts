import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Serve a aplicação React
  res.status(200).json({ message: 'EducaJovem API' });
}
