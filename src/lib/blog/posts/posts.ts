import type BlogPost from './common/BlogPost';
import ROOTS_COMPASS_POST from './roots-compass/post';

const POSTS: BlogPost[] = [
	ROOTS_COMPASS_POST,
].sort((a, b) => {
	return a.date.getTime() - b.date.getTime();
});

export default POSTS;

export const MAPPED_POSTS = new Map<string, BlogPost>();

for (const post of POSTS) {
	MAPPED_POSTS.set(post.identifier, post);
}
