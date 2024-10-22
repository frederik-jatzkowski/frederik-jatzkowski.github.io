<script lang="ts">
	import A from '$lib/shared/presentation/typography/A.svelte';
	import H4 from '$lib/shared/presentation/typography/H4.svelte';
	import P from '$lib/shared/presentation/typography/P.svelte';
</script>

<P>
	Even more exciting, the paper was honored with the Best Paper Award at the conference! This
	achievement marks a major milestone in my professional journey, as the work is primarily derived
	from the results of my bachelor’s thesis. The research was guided by my excellent supervisors,
	<A
		href="https://www.informatik.uni-halle.de/arbeitsgruppen/datenstrukturen/mitarbeiter/muellerh/"
		target="_blank"
	>
		Prof. Dr. Matthias Müller-Hannemann
	</A>
	and
	<A
		href="https://www.informatik.uni-halle.de/arbeitsgruppen/datenstrukturen/mitarbeiter/steffen_schueler/"
		target="_blank"
	>
		Dr. Steffen Schüler
	</A>
	, from the Data Structures and Efficient Algorithms group at Martin Luther University Halle-Wittenberg.
	I was also fortunate to collaborate with brilliant researchers
	<A
		href="https://www.informatik.uni-halle.de/arbeitsgruppen/datenstrukturen/mitarbeiter/schmidt/"
		target="_blank"
	>
		Antonia Schmidt
	</A>
	and Robert Mank, whose contributions were instrumental to our success.
</P>

<H4>The Problem: Spatial Transcriptomics and Barcode Layout Optimization</H4>
<P>
	Our paper addresses a unique and challenging optimization problem in the context of spatial
	transcriptomics, an exciting field that enables high-resolution spatial mapping of gene
	expression. At the heart of this problem is the selection and layout of barcodes—short DNA
	sequences that act as unique identifiers within a two-dimensional microarray. The arrays in
	question are enormous, with typical dimensions of 768×1024, which means over 786,000 barcodes need
	to be placed optimally.
</P>
<P>
	The goal is to assign barcodes to positions on the microarray in a way that minimizes a
	position-dependent cost function. In essence, we need to solve a very specialized version of the
	quadratic assignment problem (QAP), which is known for its computational complexity. Not only is
	the general QAP difficult, but we also demonstrated that the barcode layout problem is
	MaxSNP-hard, meaning it’s also hard to approximate.
</P>

<H4>Approach and Results: Heuristics and CUDA for Faster Runtime</H4>
<P>
	Given the complexity of the problem, exact methods like Integer Linear Programming (ILP) are
	infeasible for large instances—think solving for over 786,000 variables! While ILP can
	theoretically yield optimal results, it’s only applicable to very small-scale cases. To tackle
	realistic, large-scale instances, we developed a set of heuristics, including:
	<ul class="list-disc pl-8">
		<li>A sorting-based algorithm</li>
		<li>A greedy algorithm</li>
		<li>2-OPT-based local search</li>
		<li>A genetic algorithm</li>
	</ul>
	Among these, we found that a combination of the greedy algorithm and 2-OPT local search yielded the
	best results in terms of both solution quality and runtime. On large-scale arrays, our methods achieved
	an impressive 37% reduction in cost compared to random layouts and computed solutions in under 3 minutes.
	This was made possible thanks to CUDA-based optimizations, which allowed us to significantly accelerate
	runtime by utilizing GPU parallel processing. By offloading computation to GPUs, we were able to efficiently
	handle the large-scale nature of the problem while maintaining high-quality results.
</P>

<H4>Exploiting Barcode Surplus and Biochemical Constraints</H4>
<P>
	One particularly interesting aspect of our research was the surplus of barcodes. Since the pool of
	possible barcodes is much larger than the number actually needed, we explored the impact of
	selecting barcodes from this larger set. By incorporating surplus barcodes, we were able to
	significantly improve the layout quality, though this came with a slight increase in runtime.
</P>
<P>
	Another noteworthy discovery was that biochemical constraints, which limit the barcode design
	space, were actually beneficial for the overall layout cost. These constraints, rather than
	hindering the process, helped reduce complexity in the layout optimization, leading to better
	solutions.
</P>

<H4>Conclusion and Looking Ahead</H4>
<P>
	The journey from my bachelor’s thesis to an award-winning paper has been both challenging and
	rewarding. I’m deeply grateful for the guidance and support from my supervisors and collaborators,
	as well as the opportunity to present this work at SEA 2024 in Vienna. The results of our research
	show promising advances in solving large-scale combinatorial optimization problems, and I’m
	excited about future applications in spatial transcriptomics and beyond.
</P>

<P>
	<ul class="list-disc pl-8">
		<li>
			<A href="https://doi.org/10.4230/LIPIcs.SEA.2024.17" target="_blank">
				If you’d like to dive deeper into the technical details, you can find the paper in the
				Leibniz International Proceedings in Informatics (LIPIcs) series</A
			>.
		</li>
		<li>
			<A href="https://github.com/uni-halle/BarLay" target="_blank">
				The CUDA optimized C++ implementations of the algorithms described in the paper can be found
				here.</A
			>.
		</li>
		<li>
			<A href="https://sea2024.univie.ac.at/" target="_blank">
				Find out more about the SEA24 conference!</A
			>
		</li>
	</ul>
</P>
