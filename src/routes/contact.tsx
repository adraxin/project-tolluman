import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <Article
        title="Контакт"
        imageAlt="Чо за нн картина"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        Блин, рачок...
      </Article>
    </Layout>
  )
}
