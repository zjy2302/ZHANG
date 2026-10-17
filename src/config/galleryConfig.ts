import galleryData from "../data/gallery.json";
import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置：由 Pages CMS 可视化编辑 src/data/gallery.json
export const galleryConfig: GalleryConfig = galleryData as GalleryConfig;
