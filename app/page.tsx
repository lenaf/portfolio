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

          <div className="flex flex-col">
            <p className="leading-18 mb-8 text-6xl text-gray-900 dark:text-gray-400">
              I am a full-stack web developer.
            </p>
            <p className="leading-18 text-primary mb-6 text-5xl text-gray-900 dark:text-gray-400">
              I make websites that are
              <span
                className={`bg-300%	animate-gradient-fast bg-gradient-to-r from-teal-500 via-cyan-500 to-green-500 bg-clip-text font-bold text-transparent`}
              >
                {' '}
                fast{' '}
              </span>
              and
              <span
                className={` bg-300% animate-gradient-slow bg-gradient-to-r from-violet-600 via-red-300 to-blue-500 bg-clip-text font-bold text-transparent`}
              >
                {' '}
                intuitive{' '}
              </span>
              to use.
            </p>
          </div>

          <div className="flex">
            <a href="/work" className="btn rounded-full text-xl	 font-bold">
              View my work
            </a>
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
