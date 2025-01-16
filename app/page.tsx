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
          <div className="flex">
            <p className="leading-18 text-6xl text-gray-900 dark:text-gray-400">
              {/* I'm a web developer and freelance UI/UX designer. */}I make websites that run fast
              and feel effortless to use.
              {/* I am a full-stack web developer with an eye for UI/UX design.
              I make websites that run fast and feel effortless and fun to use.
              Check out some of my work. */}
            </p>
          </div>
        </div>
      </div>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
