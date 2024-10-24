import type BlogPost from '../engine/BlogPost';
import MITTELERDE24_POST from './mittelerde24/post';
import ROOTS_COMPASS_POST from './roots-compass/post';
import SEA24_POST from './sea24/post';

const POSTS: BlogPost[] = [
	ROOTS_COMPASS_POST,
	SEA24_POST,
	MITTELERDE24_POST,
].sort((a, b) => {
	return b.date.getTime() - a.date.getTime();
});

export default POSTS;

export const MAPPED_POSTS = new Map<string, BlogPost>();

for (const post of POSTS) {
	MAPPED_POSTS.set(post.identifier, post);
}
