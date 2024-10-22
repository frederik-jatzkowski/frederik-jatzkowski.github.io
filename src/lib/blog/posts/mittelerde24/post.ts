import { assets } from '$app/paths';
import BlogPost from '../../engine/BlogPost';
import Post from './Post.svelte';

const MITTELERDE24_POST = new BlogPost(
	'Talk at Jena University',
	'Barcode Layout Optimization in Spatial Transcriptomics',
	new Date(Date.parse('1 March 2024')),
	`${assets}/media/mittelerde24/speaking_landscape.jpg`,
	`I recently had the opportunity to present my research at the 5th Central German Meeting on Bioinformatics,
	hosted by the University of Jena.
	This was a fantastic chance to share the progress and initial findings from my work and to connect
	with other bioinformatics researchers working on related challenges.`,
	Post
);

export default MITTELERDE24_POST;
