import { Link } from 'react-router-dom';

const ArrowLine = () => (
  <svg
    className="w-6 h-6 ml-3 mr-3 text-blue-600"
    viewBox="0 0 54 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
      fill="currentColor"
    />
  </svg>
);

export const FeatureHighlight = ({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  learnMoreText = 'Learn More', // optional
  learnMoreLink,
  reverse = false,
  zebra = false, // ← NEW: Enable background
  zebraColor = 'bg-gradient-to-b from-blue-50 via-white to-gray-50',
}) => {
  return (
    <article
      className={` mb-10 sm:mb-0 mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:py-10 items-center rounded-none ${zebra ? zebraColor : 'bg-transparent'}
      ${zebra ? 'rounded-3xl' : ''}`}
    >
      {/* Image Left */}
      <div
        className={`flex justify-center  ${
          reverse ? 'lg:order-2 lg:justify-center' : 'lg:order-1 lg:justify-center'
        }`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-lg rounded-2xl shadow-2xl ring-1 ring-gray-200/50 transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content Right */}
      <div
        className={`lg:pt-6 ${reverse ? 'lg:order-1 lg:pl-8 flex justify-center' : 'lg:order-2 lg:pl-8'} `}
      >
        <div className="lg:max-w-lg  ">
          <div className="flex items-center">
            <ArrowLine />
            <span className="text-base font-semibold leading-7 text-blue-900 uppercase font-merienda">
              {badge}
            </span>
          </div>

          <h1 className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-lg capitalize">
            {title}
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-600 font-merienda">{description}</p>

          <dl className="my-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feat, i) => (
              <div key={i} className="relative pl-10">
                <dt className="inline font-semibold text-gray-900">
                  <feat.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                  {feat.title}
                </dt>
                <dd className="inline"> {feat.desc}</dd>
              </div>
            ))}
          </dl>

          {learnMoreLink && (
            <Link
              to={learnMoreLink}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-900 px-6 py-3 text-white font-semibold shadow-md mx-8
             hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {learnMoreText}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
