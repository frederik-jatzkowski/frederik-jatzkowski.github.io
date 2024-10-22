import { assets } from '$app/paths';
import Keyword from '$lib/blog/keywords';
import BlogPost from '../../engine/BlogPost';
import Post from './Post.svelte';

const SEA24_POST = new BlogPost(
	'Publishing my First Paper',
	'Barcode Selection and Layout Optimization in Spatial Transcriptomics',
	new Date(Date.parse('24 Juli 2024')),
	`${assets}/media/sea24/photolitography.png`,
	`I’m thrilled to announce that
	my recent paper, “Barcode Selection and Layout Optimization in Spatial Transcriptomics,” has been
	published in the proceedings of the 22nd International Symposium on Experimental Algorithms (SEA
	2024), which took place in beautiful Vienna, Austria.`,
	Post,
	[Keyword.ALGORITHM, Keyword.CUDA]
);

export default SEA24_POST;
