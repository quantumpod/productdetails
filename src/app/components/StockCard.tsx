interface StockCardProps {
  title: string;
  pieces: string;
  cases: string;
  color: 'success' | 'warning' | 'amber' | 'emerald';
}

const colorClasses = {
  success: 'text-[#22C55E]',
  warning: 'text-[#FACC15]',
  amber: 'text-amber-300',
  emerald: 'text-emerald-300',
};

export function StockCard({ title, pieces, cases, color }: StockCardProps) {
  const colorClass = colorClasses[color];

  return (
    <div className="bg-[#1E1E1E] border border-[#3E3E3E] rounded-lg p-3 sm:p-4 text-center">
      <div className={`${colorClass} font-semibold text-sm sm:text-base mb-1`}>{title}</div>
      <div className={`text-base sm:text-lg font-medium ${colorClass}`}>{pieces} pcs</div>
      <div className={`text-xs sm:text-sm ${colorClass} mt-0.5`}>{cases} cases</div>
    </div>
  );
}
