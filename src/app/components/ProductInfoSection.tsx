interface ProductInfoSectionProps {
  title: string;
  fields: Array<{ label: string; value: string | React.ReactNode }>;
  columns?: number;
}

export function ProductInfoSection({
  title,
  fields,
  columns = 4,
}: ProductInfoSectionProps) {
  const gridCols = columns === 2 ? 'sm:grid-cols-2' : columns === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-4';

  return (
    <div className="bg-[#2C2C2C] border border-[#3E3E3E] rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-2 bg-[#1E1E1E] p-3 flex items-center border-b md:border-b-0 md:border-r border-[#3E3E3E]">
          <h3 className="font-medium text-sm sm:text-base text-white">{title}</h3>
        </div>
        <div className="col-span-1 md:col-span-10 p-3">
          <div className={`grid grid-cols-1 ${gridCols} gap-3 sm:gap-4`}>
            {fields.map((field, index) => (
              <div key={index}>
                <div className="text-gray-400 text-xs sm:text-sm">{field.label}</div>
                <div className="text-white text-xs sm:text-sm">{field.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
