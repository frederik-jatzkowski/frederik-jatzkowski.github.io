import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { MAPPED_POSTS } from '$lib/blog/posts/posts';

export const load: PageLoad = ({ params }) => {
	const post = MAPPED_POSTS.get(params.title);
	if (!post) {
		error(404, 'Post not found');
	}

	return { post };
};
