import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { TabsMenu } from './components/TabsMenu';
import { ActionBar } from './components/ActionBar';
import { StockCard } from './components/StockCard';
import { ProductInfoSection } from './components/ProductInfoSection';
import { Info } from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#141414] text-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <TabsMenu />

        <div className="flex-1 overflow-auto p-4 custom-scrollbar">
          <ActionBar />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Left Column - Product Image and Basic Info */}
            <div className="lg:col-span-1 space-y-3 sm:space-y-4">
              {/* Product Image */}
              <div className="bg-[#2C2C2C] border border-[#3E3E3E] rounded-lg p-3 sm:p-4 flex justify-center">
                <div className="w-full max-w-xs aspect-square bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                </div>
              </div>

              {/* Basic Info Card */}
              <div className="bg-[#2C2C2C] border border-[#3E3E3E] rounded-lg p-3 sm:p-4 shadow-lg">
                <h3 className="font-medium text-base sm:text-lg mb-3 flex items-center gap-2 text-white">
                  <Info className="text-[#00D5C0] w-4 h-4 sm:w-5 sm:h-5" />
                  Basic Information
                </h3>

                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">SKU#</span>
                    <span className="text-white">DUR-AA2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Item#</span>
                    <span className="text-white">DURAA2-01</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vendor Item#</span>
                    <span className="text-white">NK-23300-SRT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Barcode Inner#</span>
                    <span className="text-white">881982829389</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Barcode Pack#</span>
                    <span className="text-white">847385993785</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Barcode UPC#</span>
                    <span className="text-white">859873859388</span>
                  </div>
                </div>
              </div>

              {/* Market Places */}
              <div className="bg-[#2C2C2C] border border-[#3E3E3E] rounded-lg p-3 sm:p-4">
                <h3 className="font-medium text-sm sm:text-base text-gray-300 mb-3">Market Places</h3>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#3E3E3E] rounded-full flex items-center justify-center border border-[#595959] text-white">
                    A
                  </div>
                  <div className="w-10 h-10 bg-[#3E3E3E] rounded-full flex items-center justify-center border border-[#595959] text-white">
                    E
                  </div>
                  <div className="w-10 h-10 bg-[#3E3E3E] rounded-full flex items-center justify-center border border-[#595959] text-white">
                    S
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <div className="border border-[#3E3E3E] rounded-lg p-3 sm:p-4 bg-[#1E1E1E]">
                <h3 className="font-semibold text-lg sm:text-xl mb-4 text-white">Stock</h3>

                {/* Inventory Status Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  <StockCard
                    title="On Hand"
                    pieces="13,500"
                    cases="5,000"
                    color="success"
                  />
                  <StockCard
                    title="On Orders"
                    pieces="2,500"
                    cases="50"
                    color="warning"
                  />
                  <StockCard
                    title="On Way"
                    pieces="22,500"
                    cases="2,500"
                    color="warning"
                  />
                  <StockCard
                    title="On Storage"
                    pieces="59,000"
                    cases="1,211"
                    color="amber"
                  />
                  <StockCard
                    title="MultiWarehouse"
                    pieces="265,000"
                    cases="35,000"
                    color="emerald"
                  />
                </div>
              </div>

              {/* Description and Pricing */}
              <div className="border border-[#3E3E3E] rounded-lg p-3 sm:p-4 bg-[#1E1E1E]">
                <h1 className="font-semibold text-lg sm:text-xl mb-4 text-white">Product Details</h1>

                <div className="bg-[#2C2C2C] border border-[#3E3E3E] rounded-lg p-4 sm:p-5 shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <div className="text-gray-400 text-sm mb-1">Description:</div>
                      <div className="text-white text-base">Batteries Alkaline AA2, Pack 2 B</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Price Retail:</div>
                      <div className="text-white text-base font-medium">$ 0.50</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Price WholeSale:</div>
                      <div className="text-white text-base font-medium">$ 0.80</div>
                    </div>
                  </div>
                </div>

                {/* Product Details Sections */}
                <div className="space-y-3 pt-3">
                  <ProductInfoSection
                    title="Unit Details"
                    fields={[
                      { label: 'Master Case:', value: '10' },
                      { label: 'Inner Box:', value: '4' },
                      { label: 'Pieces:', value: '12' },
                      { label: 'Pack:', value: '120' },
                    ]}
                  />

                  <ProductInfoSection
                    title="Category"
                    fields={[
                      { label: 'Main Categories:', value: <span className="font-medium">Electronic</span> },
                      { label: 'SubCategories:', value: <span className="font-medium">Batteries</span> },
                      { label: 'Product Category:', value: <span className="font-medium">Alkaline</span> },
                      { label: 'SubCategory:', value: <span className="font-medium">AA</span> },
                    ]}
                  />

                  <ProductInfoSection
                    title="Brand Name"
                    fields={[
                      { label: 'Brand Name:', value: 'Duracell' },
                      { label: 'SubBrand Name:', value: 'PowerBoost' },
                    ]}
                    columns={2}
                  />

                  <ProductInfoSection
                    title="Location"
                    fields={[
                      { label: 'Aisle Location:', value: '10' },
                      { label: 'Rack Location:', value: '23' },
                      { label: 'Shelf Location:', value: '3UP' },
                      { label: 'Bin Location:', value: 'A22' },
                    ]}
                  />

                  <ProductInfoSection
                    title="Exp Date"
                    fields={[
                      { label: 'Exp Date:', value: <span className="text-amber-300">Mix</span> },
                      { label: 'Made in:', value: <span className="text-amber-300">Mix</span> },
                      { label: 'Lote:', value: <span className="text-amber-300">Mix</span> },
                    ]}
                    columns={3}
                  />

                  <ProductInfoSection
                    title="Measuring Details"
                    fields={[
                      { label: 'L x W x H', value: '19x20x6' },
                      { label: 'Meas Type:', value: 'Inches' },
                      { label: 'Volume CBM / CBF:', value: '.004' },
                      { label: 'Pack Volume Type:', value: 'CBM' },
                    ]}
                  />

                  <ProductInfoSection
                    title="Weight Details"
                    fields={[
                      { label: 'Weight:', value: '6.5' },
                      { label: 'Weight Type:', value: 'lb' },
                      { label: 'Pallet Total Weight', value: '255 lb' },
                    ]}
                    columns={3}
                  />

                  <ProductInfoSection
                    title="Pallet Stacking"
                    fields={[
                      { label: 'PLT Type:', value: '48 x 40' },
                      { label: 'Tall:', value: "4'" },
                      { label: 'Load Weight:', value: '650 lb' },
                      { label: 'Load Volume:', value: '72.09 cu. ft.' },
                      { label: 'Cases per Layer:', value: '13 cs' },
                      { label: 'Num of Layers:', value: '9' },
                      { label: 'Total Cs per PLT:', value: '117' },
                    ]}
                    columns={4}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-end">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center bg-[#2C2C2C] rounded hover:bg-[#3E3E3E] text-white">
                <span>&lt;</span>
              </button>
              <span className="text-sm text-gray-400">1</span>
              <span className="text-sm text-gray-400">of</span>
              <span className="text-sm text-gray-400">160</span>
              <button className="w-8 h-8 flex items-center justify-center bg-[#2C2C2C] rounded hover:bg-[#3E3E3E] text-white">
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
