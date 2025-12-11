const ArrowLine = () => (
  <svg
    className="w-8 h-8 text-blue-600"
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

const SectionHeader = ({ badge, title, children }) => (
  <header className="mx-auto  text-center lg:mt-10">
    <div className=" inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-sm font-bold text-blue-900">
      <ArrowLine />
      <span className="uppercase font-merienda text-xs sm:text-xs">{badge}</span>
      <ArrowLine className="ml-3 rotate-180" />
    </div>

    <h1 className="mt-5 text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-700 leading-tight">
      {title}
    </h1>

    {children && (
      <p className="mt-8 text-base sm:text-lg leading-9 text-gray-700 font-medium  mx-auto font-merienda">
        {children}
      </p>
    )}
  </header>
);

export default SectionHeader;
