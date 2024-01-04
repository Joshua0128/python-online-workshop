// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Projects Zero',
	tagline: '跟 Python 變麻吉',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://python.projectszero.tech',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hant',
		locales: ['zh-Hant'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					routeBasePath: '/docs',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			algolia: {
				apiKey: '12df0eb2a7bb2e7d7dbdc1d0852f94fd',
				indexName: 'docs-algolia',
				appId: 'SF83Z7QJOE',
			},
			navbar: {
				title: 'Projects Zero',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Tutorial',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					// { to: '/about', label: 'About', position: 'right' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},

			colorMode: {
				defaultMode: 'dark',
				// disableSwitch: true,
			},

			announcementBar: {
				id: 'info', // Any value that will identify this message.
				content: '內容還在開發中，目前進度65%, 預計2024 Q1 完成',
				backgroundColor: '#fafbfc', // Defaults to `#fff`.
				textColor: '#091E42', // Defaults to `#000`.
			},

			footer: {
				style: 'dark',

				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							// {
							// 	label: 'Stack Overflow',
							// 	href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							// },
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							// {
							// 	label: 'Twitter',
							// 	href: 'https://twitter.com/docusaurus',
							// },
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Projectszero, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.vsDark,
				darkTheme: prismThemes.vsDark,
				magicComments: [
					{
						className: 'theme-code-block-highlighted-line',
						line: 'highlight-next-line',
						block: {
							start: 'highlight-start',
							end: 'highlight-end',
						},
					},
					{
						className: 'code-block-error-line',
						line: 'error',
					},
				],
			},
		}),
}

export default config
