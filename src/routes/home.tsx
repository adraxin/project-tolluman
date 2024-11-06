import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Мой личный сайт"
        content="."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
