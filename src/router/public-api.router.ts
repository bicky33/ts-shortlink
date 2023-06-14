import { type Request, type Response, Router } from 'express';
import { logger } from '../util/logging.js';

const publicRouter = Router();

publicRouter.get('/health', async (req: Request, res: Response) => {
  logger.info('your api is ok!');
  res.status(200).json({ message: 'ok!' });
});

export { publicRouter };