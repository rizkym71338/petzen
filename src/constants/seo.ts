import { Metadata } from 'next'

type TSeo = {
	homeLayout: Metadata
}

export const seo: TSeo = {
	homeLayout: {
		title: 'Pet Zen',
		description: 'O melhor suporte no cuidado para seu melhor amigo.',
	},
}
