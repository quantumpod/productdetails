import { useState } from 'react';
import {
  Warehouse,
  Info,
  ShoppingCart,
  Truck,
  ShoppingBag,
  PackageCheck,
  MapPin,
  TruckIcon,
  Calculator,
} from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tabs: Tab[] = [
  { id: 'inventory', label: 'Inventory', shortLabel: 'Inv', icon: Warehouse },
  { id: 'details', label: 'Item Details', shortLabel: 'Item', icon: Info },
  { id: 'sales', label: 'Sales Orders', shortLabel: 'Sales', icon: ShoppingCart },
  { id: 'supplier', label: 'Supplier', shortLabel: 'Supp', icon: Truck },
  { id: 'purchases', label: 'Purchases', shortLabel: 'Purch', icon: ShoppingBag },
  { id: 'receiving', label: 'Receiving', shortLabel: 'Recv', icon: PackageCheck },
  { id: 'tracking', label: 'Inventory Tracking', shortLabel: 'Track', icon: MapPin },
  { id: 'shipping', label: 'Shipping', shortLabel: 'Ship', icon: TruckIcon },
  { id: 'accounting', label: 'Accounting', shortLabel: 'Acct', icon: Calculator },
];

export function TabsMenu() {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <div className="bg-[#1E1E1E] border-b border-[#2C2C2C] sm:px-2 lg:px-4 sm:overflow-x-auto custom-scrollbar">
      <div className="flex sm:gap-1 sm:min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              title={tab.label}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center justify-center gap-1.5
                flex-1 sm:flex-none
                py-3 px-1
                sm:gap-2 sm:px-3
                lg:px-4 lg:py-3
                text-xs sm:text-sm font-medium
                transition-colors
                sm:min-w-0
                ${isActive
                  ? 'border-b-2 border-[#00D5C0] text-[#00D5C0] bg-[#2C2C2C]/50'
                  : 'text-gray-400 hover:text-white hover:bg-[#2C2C2C]/30'
                }
              `}
            >
              {/* Icon always visible */}
              <Icon className="w-5 h-5 flex-shrink-0" />
              {/* Mobile: icon only, Tablet+: show short label, Desktop: show full label */}
              <span className="hidden sm:inline lg:hidden whitespace-nowrap">{tab.shortLabel}</span>
              <span className="hidden lg:inline whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
