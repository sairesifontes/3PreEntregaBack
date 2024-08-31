import mongoose from "mongoose";
import envs from "./env.config.js";
import { logger } from "../utils/logger.js";

export const connectMongoDB = async () => {
  try {
    // Conexión con la base de datos
    mongoose.connect(envs.MONGO_URL);
<<<<<<< HEAD
    //console.log("Mongo DB Conectado");
=======
>>>>>>> c00b020a287198727bef2dfbba156a4999ac54de
    logger.info("Mongo DB Conectado");
  } catch (error) {
    console.log(error);
  }
};