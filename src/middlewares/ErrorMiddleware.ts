import type {NextFunction, Request, Response} from 'express';
import type ErrorHandler from '../utils/ErrorHandler';

export default function ErrorMiddleware(err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) {
	if (err.type === 'ErrorHandler') {
		return res.status(err.statusCode).json({message: err.message});
	}

	return res.status(500).json({message: err.message});
}
