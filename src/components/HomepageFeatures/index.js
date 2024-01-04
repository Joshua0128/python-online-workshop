import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
	{
		title: '優化學習曲線',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				每天一小時，不會太累，也不會太輕鬆，讓學習 Python 變得更有效率。
			</>
		),
	},
	{
		title: '介面優化',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: <> 網站好看，真的啦。</>,
	},
	{
		title: '手腦並用',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: <>學習 Python 的概念，同時也用練習熟悉 Python 的語法。</>,
	},
]

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
