import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

function AboutPage() {
  return (
    <Layout>
      <Article
        title="О себе"
        imageAlt="Чо за нн картина"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        {/* prettier-ignore */}
        <p>
Родился 28 февраля 2005 года, учусь на данным момент в "КЦТ "АЙТЫЫН" 2 курс
        </p>
      </Article>
    </Layout>
  )
}

export default AboutPage
