<script lang="ts">
	import { assets } from '$app/paths';
	import A from '$lib/shared/presentation/typography/A.svelte';
	import H4 from '$lib/shared/presentation/typography/H4.svelte';
	import P from '$lib/shared/presentation/typography/P.svelte';
</script>

<P>
	This was a fantastic chance to share the progress and initial findings from my work and to connect
	with other bioinformatics researchers working on related challenges.
</P>

<H4>The Problem: Reducing Errors in Barcode Synthesis</H4>
<P>
	Spatial transcriptomics is a powerful technique for mapping gene expression across tissue samples.
	It relies on applying transcripts to an array with 1024×768 features, where each transcript is
	tagged with a unique DNA barcode. After sequencing, these barcodes are used to trace the spatial
	origin of each transcript.
</P>
<P>
	However, the process of synthesizing barcodes on such arrays—using photolithography—can introduce
	significant errors. It’s estimated that up to 20% of bases may contain synthesis errors, often due
	to neighbor effects caused by scattered or diffracted light during the synthesis process. These
	errors make it difficult to correctly assign transcripts to their corresponding barcodes,
	complicating the gene expression analysis.
</P>

<H4>Our Approach: Optimizing Barcode Layouts</H4>
<P>
	In my talk, I discussed how our research addresses this problem by focusing on barcode layout
	optimization. The goal is to minimize the similarity between neighboring barcodes, reducing the
	likelihood of synthesis errors affecting adjacent features on the array. This gives rise to a
	complex combinatorial optimization problem.
</P>
<P>
	We demonstrated that this problem is MaxSNP-hard, meaning it’s computationally challenging to
	solve optimally or even to approximate. While Integer Linear Programming (ILP) formulations could,
	in theory, yield optimal solutions, they are only feasible for very small instances. For larger
	arrays, like the ones used in spatial transcriptomics, we turned to heuristic algorithms capable
	of computing near-optimal layouts.
</P>

<H4>Heuristic Solutions and GPU Acceleration</H4>

<P>
	Our research has developed several heuristic algorithms, including:
	<ul class="list-disc pl-8">
		<li>A sorting-based algorithm</li>
		<li>A greedy algorithm</li>
		<li>A genetic algorithm</li>
	</ul>
	The most promising results so far come from the greedy algorithm, which we accelerated using GPU processing.
	This GPU-accelerated approach significantly reduced runtime while still producing high-quality layouts.
	For large-scale arrays with 1024×768 features, the greedy algorithm achieved a 35-40% improvement in
	layout quality over random layouts, with solutions computed in about 15 seconds. These results suggest
	that our methods could be applicable to real-world scenarios where speed and accuracy are critical.
</P>

<H4>Reflections on the Presentation</H4>
<P>
	The response to my talk was very encouraging. Attendees expressed interest in the potential
	applications of this research to other areas of bioinformatics and gene expression analysis. There
	were also great questions and discussions about possible future directions, including how further
	refinements in the heuristic algorithms might push the performance even higher.
</P>
<P>
	Presenting at the 5th Central German Meeting on Bioinformatics was a valuable experience, allowing
	me to gain feedback from the broader research community and further develop ideas for the next
	phase of the project. I'm looking forward to exploring additional avenues for improving barcode
	layout optimization and seeing how these methods might impact the field of spatial
	transcriptomics.
</P>

<H4>Acknowledgements</H4>
<P>
	I’d like to express my gratitude to my supervisors, Prof. Dr. Matthias Müller-Hannemann and Dr.
	Steffen Schüler and Antonia Schmidt for the great collaboration. This work would not have been
	possible without their expertise and encouragement.
</P>

<P>
	Additional Information:
	<ul class="list-disc pl-8">
		<li>
			<A href="https://mittelerde-meeting.uni-jena.de/" target="_blank">
				The website of the 5th Central German Meeting on Bioinformatics.</A
			>
		</li>
		<li>
			<A href={`${assets}/media/mittelerde24/presentation.pdf`} target="_blank">
				The slides of the talk.</A
			>
		</li>
	</ul>
</P>
