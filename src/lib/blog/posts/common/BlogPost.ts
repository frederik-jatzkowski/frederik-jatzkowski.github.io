import type { ComponentType, SvelteComponent } from 'svelte';

export default class BlogPost {
	readonly identifier: string;
	constructor(
		readonly title: string,
		readonly subtitle: string | null,
		readonly date: Date,
		readonly heroImage: string | null,
		readonly intro: string,
		readonly body: ComponentType<SvelteComponent>
	) {
		this.identifier = encodeURIComponent(title);
	}
}
