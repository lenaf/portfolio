import Image from './Image'
import Link from './Link'

const Card = ({ title, description, desktopImgSrc, mobileImgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div className={`${desktopImgSrc && 'h-full'} relative overflow-hidden rounded-md`}>
      {mobileImgSrc && (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={mobileImgSrc}
            className="contain-center absolute -right-8 top-4 h-2/3 object-cover"
            width={200}
            height={306}
          />
        </Link>
      )}
      <Link href={href} aria-label={`Link to ${title}`}>
        <Image
          alt={title}
          src={desktopImgSrc}
          className="object-contain object-left md:h-48 lg:h-64"
          width={544}
          height={306}
        />
      </Link>
      <div className="py-6">
        <h2 className="mb-1 text-2xl font-bold leading-8 tracking-tight">
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-1 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            See Live &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
