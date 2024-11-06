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
        <a href="https://steamcommunity.com/id/nobindony">steam, </a>
        <a href="https://osu.ppy.sh/users/adraxin">osu profile</a>
      </Article>
    </Layout>
  )
}
