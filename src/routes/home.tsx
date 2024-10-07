import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Щыг ссылка"
        content="На почту скинется гайд(пока не работает, в разработке)."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
