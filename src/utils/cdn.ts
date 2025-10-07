// Simple helper to build Cloudinary CDN URLs for images/files with env-driven config

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "";
const BASE_PATH = (import.meta.env.VITE_CLOUDINARY_BASE_PATH || "").replace(/^\/+|\/+$/g, "");

const buildPath = (path: string) => {
  const cleanPath = path.replace(/^\/+/, "");
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : cleanPath;
};

// params can be a comma-separated string like "f_auto,q_auto,w_800"
export const cdnImage = (path: string, params: string = "f_auto,q_auto") => {
  if (!CLOUD_NAME) {
    // Fallback to the provided path if cloud is not configured yet
    return `/${path.replace(/^\//, "")}`;
  }
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const normalizedParams = params.trim();
  const prefix = normalizedParams ? `/${normalizedParams}` : "";
  return `${base}${prefix}/${buildPath(path)}`;
};

// PDFs or other non-image assets use the "raw" resource type
export const cdnFile = (path: string) => {
  if (!CLOUD_NAME) {
    return `/${path.replace(/^\//, "")}`;
  }
  return `https://res.cloudinary.com/${CLOUD_NAME}/raw/upload/${buildPath(path)}`;
};

export default cdnImage;


