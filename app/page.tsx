import TextGradient from '@/components/TextGradient'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default async function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-lg leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
            Hello, my name is Lena Forti.
          </h1>

          <div className="mb-8 flex flex-col">
            <p className="leading-18 mb-8 text-6xl text-gray-900 dark:text-gray-400">
              I am a full-stack web developer.
            </p>
            <p className="leading-18 text-primary text-4xl text-gray-900 dark:text-gray-400">
              I make websites that are
              <TextGradient fast> fast </TextGradient>
              and
              <TextGradient> intuitive </TextGradient>
              to use.
            </p>
          </div>
        </div>

        <a href="/work" className="btn">
          View my work
        </a>
      </div>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
