import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
coverUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
.onUploadComplete(async ({ file }) => {
return { url: file.url };
}),

pdfUploader: f({
pdf: { maxFileSize: "16MB", maxFileCount: 1 }
}).onUploadComplete(async ({ file }) => {
  return { url: file.url }
}),

audioUploader: f({
audio: { maxFileSize: "32MB", maxFileCount: 1 }
}).onUploadComplete(async ({ file }) => {
return { url: file.url }
}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
