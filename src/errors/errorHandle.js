import { logger } from "../utils/logger.js";

export const errorHandle = (err, req, res, next) => {
  const status = err.status || 500;
  const message = status === 500 ? "Internal Server Error" : err.message;
  if(status === 500) {
<<<<<<< HEAD
    logger.log("error", `${err.path || ""} - ${err.message}`);
=======
    logger.log("error", err.message);
>>>>>>> c00b020a287198727bef2dfbba156a4999ac54de
  }
  res.status(status).json({
    error: {
      message,
      status,
    },
  });
};