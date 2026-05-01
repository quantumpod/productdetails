import { Search, Save, Edit, Printer, FileText, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export function ActionBar() {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  return (
    <div className="space-y-3 mb-4">
      {/* Search Bar */}
      <div className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="bg-[#2C2C2C] border border-[#3E3E3E] text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D5C0] block w-full pl-10 p-2.5"
            placeholder="Search by Item, name, SKU..."
          />
        </div>
      </div>

      {/* Action Buttons and Pagination */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
        {/* Pagination - Full width on mobile */}
        <div className="flex items-center justify-center sm:justify-start gap-1 text-sm text-gray-400 bg-[#2C2C2C] sm:bg-transparent rounded-lg py-2 sm:py-0">
          <button className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center bg-[#1E1E1E] sm:bg-[#2C2C2C] rounded hover:bg-[#3E3E3E] text-white">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm px-2">1</span>
          <span className="text-sm">of</span>
          <span className="text-sm px-2">160</span>
          <button className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center bg-[#1E1E1E] sm:bg-[#2C2C2C] rounded hover:bg-[#3E3E3E] text-white">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons - Full width on mobile */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Primary Actions */}
          <button className="flex-1 sm:flex-none sm:w-auto h-10 sm:h-auto sm:px-4 sm:py-2 bg-[#00D5C0] hover:bg-[#00D5C0]/90 text-black rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            <span className="hidden sm:inline">Save</span>
          </button>

          <button className="flex-1 sm:flex-none sm:w-auto h-10 sm:h-auto sm:px-4 sm:py-2 bg-[#2C2C2C] hover:bg-[#3E3E3E] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <Edit className="w-4 h-4" />
            <span className="hidden sm:inline">Edit</span>
          </button>

          {/* Desktop: Print & Report */}
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] hover:bg-[#3E3E3E] text-white rounded-lg text-sm font-medium">
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>

          <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] hover:bg-[#3E3E3E] text-white rounded-lg text-sm font-medium">
            <FileText className="w-4 h-4" />
            <span>Report</span>
          </button>

          {/* Mobile/Tablet: More Menu */}
          <div className="relative lg:hidden flex-1 sm:flex-none">
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="w-full h-10 sm:w-9 sm:h-9 flex items-center justify-center bg-[#2C2C2C] hover:bg-[#3E3E3E] text-white rounded-lg"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {showMoreMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMoreMenu(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-40 bg-[#2C2C2C] border border-[#3E3E3E] rounded-lg shadow-lg z-20 overflow-hidden">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#3E3E3E] text-sm">
                    <Printer className="w-4 h-4" />
                    <span>Print</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#3E3E3E] text-sm border-t border-[#3E3E3E]">
                    <FileText className="w-4 h-4" />
                    <span>Report</span>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Status Badge */}
          <div className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#2C2C2C] h-10 sm:h-auto px-3 sm:py-2 rounded-lg sm:rounded-full border border-[#3E3E3E]">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
            <span className="text-xs sm:text-sm text-white">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
