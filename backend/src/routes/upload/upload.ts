import { makeFastifyRoute, RouteMethod } from "../../constant-definitions";
import { FastifyRequest, FastifyReply } from 'fastify';
import httpStatus from "http-status";
import multer from "fastify-multer";
import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import fastifyMulter from "fastify-multer";
import path from "path";
import { Video } from "../../types/video";
import { createVideo } from "../../business-logic/video/upload";

// type FileNameCallback = (error: Error | null, filename: string) => void

// cloudinary.config({
//   cloud_name: 'prefectcode',
//   api_key: '143831775987825',
//   api_secret:'y8qB56rFcfWjckhy8kFujqx5KMA',
// }
// );
const storage = fastifyMulter.diskStorage({})
const uploadMulter = fastifyMulter({ storage: storage, fileFilter:(request, file, cb) => {
  let ext = path.extname(file.originalname);
  if(ext !== ".mp4"){
      cb(new Error("File not found"))
      return;
  }
  cb(null, true)
} })
export const createVideoRoute = makeFastifyRoute(
    RouteMethod.POST,
    '/videos',
    async (request:FastifyRequest, reply: any) => {    
        const {body} = request;
        const data = body as Video;
        const video = await createVideo(data);
        reply.send(video);
    }
)