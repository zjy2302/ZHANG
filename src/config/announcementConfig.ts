import announcementData from "../data/announcement.json";
import type { AnnouncementConfig } from "../types/announcementConfig";

// 公告配置：由 Pages CMS 可视化编辑 src/data/announcement.json
export const announcementConfig: AnnouncementConfig =
	announcementData as AnnouncementConfig;
