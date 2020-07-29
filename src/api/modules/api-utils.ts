export function sendError(res: any, code: number, error: Error) {
  return res.status(code).json({ code, message: error?.message });
}