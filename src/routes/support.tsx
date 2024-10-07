import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'

export default function SupportPage() {
  const [success, setSuccess] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <Layout>
      <Article
        title="Поддержка"
        imageAlt="Чо за нн картина"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <p>Добавьте здесь свои данные для поддержки.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="name">
              Имя
            </label>
            <input
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="email">
              Емеил
            </label>
            <input
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="message">
              Сообщение
            </label>
            <textarea
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="message"
              name="message"
            />
          </div>

          <button
            className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
            onClick={handleClick}
            type="submit"
          >
            Отправить
          </button>

          {success && (
            <div className="mt-2 text-xs italic text-gray-500">
              🎉 Do something when the form is submitted!
            </div>
          )}
        </form>
      </Article>
    </Layout>
  )
}
