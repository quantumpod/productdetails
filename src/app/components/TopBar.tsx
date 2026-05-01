import { Bell, Mail, User, Package, Menu } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="bg-[#1E1E1E] border-b border-[#2C2C2C] p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden w-10 h-10 rounded-lg bg-[#2C2C2C] flex items-center justify-center hover:bg-[#3E3E3E] focus:outline-none text-white"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="text-sm text-gray-400 hidden sm:block">
            <span className="hover:text-[#00D5C0] cursor-pointer">Home</span> &gt;{' '}
            <span className="hover:text-[#00D5C0] cursor-pointer">Inventory</span> &gt;{' '}
            <span className="text-[#00D5C0] font-medium">Products</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold mt-1 flex items-center gap-2 text-white">
            <Package className="text-[#00D5C0] w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">Product Details</span>
            <span className="sm:hidden">Products</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="text-sm hidden md:block">
          <span className="text-gray-400">Welcome,</span>{' '}
          <span className="font-medium text-white">Admin</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative w-10 h-10 rounded-full bg-[#2C2C2C] flex items-center justify-center hover:bg-[#3E3E3E] focus:outline-none text-white">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border border-[#141414]"></span>
          </button>

          <button className="w-10 h-10 rounded-full bg-[#2C2C2C] flex items-center justify-center hover:bg-[#3E3E3E] focus:outline-none text-white hidden sm:flex">
            <Mail className="w-5 h-5" />
          </button>

          <div className="w-10 h-10 rounded-full bg-[#2C2C2C] flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
