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
Vsm o sebe?
        </p>
      </Article>
    </Layout>
  )
}

export default AboutPage
