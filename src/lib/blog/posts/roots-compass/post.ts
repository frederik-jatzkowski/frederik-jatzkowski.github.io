import { assets } from '$app/paths';
import Keyword from '$lib/blog/keywords';
import BlogPost from '../../engine/BlogPost';
import Post from './Post.svelte';

const ROOTS_COMPASS_POST = new BlogPost(
	'Bringing the Past to Life',
	'The Launch of the ROOTS Compass Portal',
	new Date(Date.parse('22 August 2024')),
	`${assets}/media/roots-compass/map_view.webp`,
	`I am excited to share the launch of the ROOTS Compass,
    an innovative online platform that offers interactive access
    to the wide range of multidisciplinary research carried out
    by the Cluster of Excellence ROOTS.`,
	Post,
	[Keyword.SVELTEKIT, Keyword.POSTGRES, Keyword.MAPBOX]
);

export default ROOTS_COMPASS_POST;
