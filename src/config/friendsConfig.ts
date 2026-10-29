import friendsData from "../data/friends.json";
import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在 src/content/spec/friends.md 中编写友链页面下方的自定义内容

// 友链页面配置：由 Pages CMS 可视化编辑 src/data/friends.json
const friendsPage = friendsData.page ?? ({} as Record<string, unknown>);

export const friendsPageConfig: FriendsPageConfig = {
	title: (friendsPage.title as string) ?? "",
	description: (friendsPage.description as string) ?? "",
	showCustomContent: (friendsPage.showCustomContent as boolean) ?? true,
	showComment: (friendsPage.showComment as boolean) ?? true,
	randomizeSort: (friendsPage.randomizeSort as boolean) ?? false,
};

// 友链列表：由 Pages CMS 可视化编辑 src/data/friends.json
const friendsConfig: FriendLink[] = (friendsData.links ?? []) as FriendLink[];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
