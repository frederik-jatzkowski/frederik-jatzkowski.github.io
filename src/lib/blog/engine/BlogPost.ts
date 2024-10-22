import type { ComponentType, SvelteComponent } from 'svelte';
import type Keyword from '../keywords';

export default class BlogPost {
	readonly identifier: string;
	constructor(
		readonly title: string,
		readonly subtitle: string | null,
		readonly date: Date,
		readonly heroImage: string | null,
		readonly intro: string,
		readonly body: ComponentType<SvelteComponent>,
		readonly keywords: Keyword[]
	) {
		this.identifier = this.title.replaceAll(' ', '_');
	}
}
