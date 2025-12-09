// src/components/home/WhyChooseUs/WhyChooseUsCard.jsx
export const WhyChooseUsCard = ({ title, icon: Icon, desc }) => (
  <div className=" group relative bg-white hover:bg-blue-500 rounded-sm cursor-pointer transition-all duration-700 overflow-hidden border border-blue-100">
    <div className="absolute top-0 left-0 h-1 w-20 bg-blue-900/50 transition-all duration-500 group-hover:bg-white group-hover:w-1/2 z-10" />
    <div className="p-6 text-left flex flex-col items-start">
      <Icon className="w-10 h-10 mb-6 text-blue-900 group-hover:text-white transition-colors" />
      <h3 className="font-merienda text-lg font-bold text-blue-900 group-hover:text-white transition-colors duration-500">
        {title}
      </h3>
      <p className="font-merienda mt-4 text-sm text-blue-500 group-hover:text-white transition-colors duration-500 leading-relaxed">
        {desc}
      </p>
    </div>
    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
  </div>
);
