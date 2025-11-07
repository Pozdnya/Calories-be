import { HttpException, HttpStatus } from '@nestjs/common';

export function handleError(
  error: unknown,
  fallback: string,
  HttpStatus: HttpStatus,
): never {
  const err = error instanceof Error ? error.message : fallback;
  throw new HttpException(err, HttpStatus);
}
