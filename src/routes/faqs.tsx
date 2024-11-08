import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article
        title="Вопросы"
        imageAlt="Чо за нн картина"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <p>Вопросы про скилл.</p>
        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">CS2?</summary>
          <p>
            Тут без комментариев... Крутилки на 8.000 в премьере. Приватные читы не банятся.А так вот мой стим{' '}
            <a href="https://steamcommunity.com/id/nobindony">proof</a>!
          </p>
          <p>
            Кс го лучше.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Geometry Dash?</summary>
          <p>
Ох такая непредсказуемая история, обречённым тильтом
          </p>
          <p>
            [Extreme Demon] Cataclysm 66%... mindblock 48%(
          </p>
          <p>
  А так щёлкаю демоны(кроме екстрима) как орешки
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">osu!</summary>
          <p>
            Блен я анскил(6 дигит) 200 перформанс поинт для меня сказка...{' '}
            <a href="https://osu.ppy.sh/users/14657996">osu!profile</a>.
          </p>
        </details>
      </Article>
    </Layout>
  )
}
