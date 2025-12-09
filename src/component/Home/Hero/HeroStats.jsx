// src/components/home/HeroStats.jsx
export const HeroStats = ({
  stats = [
    { num: '50+', label: 'Restaurants' },
    { num: '24/7', label: 'Works Offline' },
    { num: '100%', label: 'Made in Ethiopia' },
  ],
}) => (
  <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 text-gray-600">
    {stats.map(item => (
      <div key={item.label} className="flex flex-col items-center">
        <span className="text-4xl font-bold text-blue-900 font-merienda">{item.num}</span>
        <span className="text-sm mt-1 text-blue-500 font-merienda">{item.label}</span>
      </div>
    ))}
  </div>
);
