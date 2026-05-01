import {
  LayoutDashboard,
  Boxes,
  PackageOpen,
  List,
  Barcode,
  ArrowLeftRight,
  SlidersHorizontal,
  Settings,
  ShoppingCart,
  ShoppingBag,
  Truck,
  TruckIcon,
  X,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay para móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-[#1E1E1E] shadow-lg flex-shrink-0 overflow-y-auto custom-scrollbar
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
      <div className="p-4 border-b border-[#2C2C2C] flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight text-white">DOCKINGWARE</h1>
        <button
          onClick={onClose}
          className="lg:hidden w-8 h-8 rounded-lg bg-[#2C2C2C] flex items-center justify-center hover:bg-[#3E3E3E] text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-1">
        <div className="text-xs uppercase text-gray-400 tracking-wider mb-2 px-2">
          Main Menu
        </div>

        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2C2C2C] text-white"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </a>

          <div className="mt-4 space-y-1">
            <div className="text-xs uppercase text-gray-400 tracking-wider mb-2 px-2">
              Inventory
            </div>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2C2C2C] text-white"
            >
              <Boxes className="w-5 h-5" />
              <span>Inventory</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C]"
            >
              <PackageOpen className="w-5 h-5" />
              <span>Products</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C] ml-8"
            >
              <List className="w-5 h-5" />
              <span>Products List</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C]"
            >
              <Barcode className="w-5 h-5" />
              <span>Asset Tracking</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C] ml-8"
            >
              <ArrowLeftRight className="w-5 h-5" />
              <span>Transfer</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C] ml-8"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Inv Adjustment</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C] ml-8"
            >
              <Settings className="w-5 h-5" />
              <span>Other Setting</span>
            </a>
          </div>

          <div className="mt-4 space-y-1">
            <div className="text-xs uppercase text-gray-400 tracking-wider mb-2 px-2">
              Sales
            </div>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C]"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Sales</span>
            </a>
          </div>

          <div className="mt-4 space-y-1">
            <div className="text-xs uppercase text-gray-400 tracking-wider mb-2 px-2">
              Purchase
            </div>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Purchase</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C] ml-8"
            >
              <Truck className="w-5 h-5" />
              <span>Receiving</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#2C2C2C] ml-8"
            >
              <TruckIcon className="w-5 h-5" />
              <span>Shipping</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
