import Image from './Image'
import Link from './Link'

const Card = ({ title, description, desktopImgSrc, mobileImgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        desktopImgSrc && 'h-full'
      } relative overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {mobileImgSrc && (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={mobileImgSrc}
            className="contain-center absolute left-48 top-10 object-cover md:h-48 lg:h-64"
            width={200}
            height={306}
          />
        </Link>
      )}
      <Link href={href} aria-label={`Link to ${title}`}>
        <Image
          alt={title}
          src={desktopImgSrc}
          className="object-contain object-center md:h-48 lg:h-64"
          width={544}
          height={306}
        />
      </Link>
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
