import commentData from "../data/comments.json";
import type { CommentConfig } from "../types/commentConfig";

// 评论配置：由 Pages CMS 可视化编辑 src/data/comments.json
// type 可选：none / twikoo / waline / giscus / disqus / artalk
const data = commentData as CommentConfig;

export const commentConfig: CommentConfig = {
	type: data.type ?? "none",

	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: "zh-CN",
		visitorCount: true,
		jsUrl: "https://cdn.jsdelivr.net/npm/twikoo@1.7.14/dist/twikoo.min.js",
		cssUrl: "/assets/css/twikoo-custom.css",
		...data.twikoo,
	},

	waline: {
		serverURL: "https://waline.vercel.app",
		lang: "zh-CN",
		emoji: [
			"https://unpkg.com/@waline/emojis@1.4.0/weibo",
			"https://unpkg.com/@waline/emojis@1.4.0/bilibili",
			"https://unpkg.com/@waline/emojis@1.4.0/bmoji",
		],
		login: "enable",
		visitorCount: true,
		...data.waline,
	},

	artalk: {
		server: "https://artalk.example.com/",
		locale: "zh-CN",
		visitorCount: true,
		...data.artalk,
	},

	giscus: {
		repo: "",
		repoId: "",
		category: "",
		categoryId: "",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		lang: "zh-CN",
		loading: "lazy",
		...data.giscus,
	},

	disqus: {
		shortname: "firefly",
		...data.disqus,
	},
};
