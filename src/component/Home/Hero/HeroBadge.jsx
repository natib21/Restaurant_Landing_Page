// src/components/home/HeroBadge.jsx
export const HeroBadge = ({ children }) => (
  <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-2.5 text-sm font-medium text-blue-800">
    <svg
      className="w-12 h-6 ml-3 mr-3 text-blue-600"
      viewBox="0 0 54 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
        fill="currentColor"
      />
    </svg>
    <span className="font-bold uppercase tracking-wider text-blue-900 font-merienda">
      {children}
    </span>
    <svg
      className="w-12 h-6 ml-3 text-blue-600 rotate-180"
      viewBox="0 0 54 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
        fill="currentColor"
      />
    </svg>
  </div>
);
