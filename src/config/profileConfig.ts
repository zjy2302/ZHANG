import profileData from "../data/profile.json";
import type { ProfileConfig } from "../types/profileConfig";

// 个人资料配置：由 Pages CMS 可视化编辑 src/data/profile.json
// avatar 支持三种格式：
// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.avif"
// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间）："assets/images/avatar.avif"
// 3. 远程 URL："https://example.com/avatar.jpg"
export const profileConfig: ProfileConfig = profileData as ProfileConfig;
