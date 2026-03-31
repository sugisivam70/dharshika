import React from "react";
import { Download, ExternalLink } from "lucide-react";

const ProductsPage: React.FC = () => {
  const products = [
    {
      img: "/burner-3.jpeg",
      name: "Gas Burner - Single",
      category: "gas ranges",
    },
    {
      img: "/burner-1.jpeg",
      name: "Gas Burner - Four",
      category: "gas ranges",
    },
    { img: "/gas-ranges/221597.jpg", name: "221597", category: "gas ranges" },
    { img: "/gas-ranges/225679.jpg", name: "225679", category: "gas ranges" },
    { img: "/gas-ranges/238424.jpg", name: "238424", category: "gas ranges" },
    { img: "/gas-ranges/239205.jpg", name: "239205", category: "gas ranges" },
    { img: "/gas-ranges/242288.jpg", name: "242288", category: "gas ranges" },
    { img: "/gas-ranges/242289.jpg", name: "242289", category: "gas ranges" },
    { img: "/gas-ranges/242407.jpg", name: "242407", category: "gas ranges" },
    { img: "/gas-ranges/242408.jpg", name: "242408", category: "gas ranges" },
    { img: "/gas-ranges/242412.jpg", name: "242412", category: "gas ranges" },
    { img: "/gas-ranges/243352.jpg", name: "243352", category: "gas ranges" },
    { img: "/gas-ranges/247988.jpg", name: "247988", category: "gas ranges" },
    { img: "/gas-ranges/247989.jpg", name: "247989", category: "gas ranges" },
    { img: "/gas-ranges/248159.jpg", name: "248159", category: "gas ranges" },
    {
      img: "/gas-ranges/1000025809.jpg",
      name: "1000025809",
      category: "gas ranges",
    },
    {
      img: "/gas-ranges/1000025888.jpg",
      name: "1000025888",
      category: "gas ranges",
    },

    {
      img: "/rack-1.jpeg",
      name: "Storage Rack - Compact",
      category: "Storage",
    },
    { img: "/rack-2.jpeg", name: "Storage Rack - Medium", category: "Storage" },
    { img: "/rack-3.jpeg", name: "Storage Rack - Large", category: "Storage" },
    { img: "/rack-4.jpeg", name: "Multi-Tier Rack", category: "Storage" },
    {
      img: "counter/tea-coffee-counter.jpeg",
      name: "Tea & Coffee Counter",
      category: "Counters",
    },
    {
      img: "counter/chat-and-pavbaji-counter.jpeg",
      name: "Chat & Pav Bhaji Counter",
      category: "Counters",
    },
    {
      img: "counter/icecream-counter.jpeg",
      name: "Ice Cream Counter",
      category: "Counters",
    },
    {
      img: "/counter/counter-4.jpg",
      name: "Ice Cream Counter2",
      category: "Counters",
    },

    {
      img: "/counter/238269.jpg",
      name: "Counter Model 238269",
      category: "Counters",
    },
    {
      img: "/counter/238475.jpg",
      name: "Counter Model 238475",
      category: "Counters",
    },

    {
      img: "/counter/238867.jpg",
      name: "Counter Model 238867",
      category: "Counters",
    },
    {
      img: "/counter/IMG-20260204-WA0045.jpg",
      name: "Counter Model 238867",
      category: "Counters",
    },
    {
      img: "/counter/IMG-20260204-WA0029.jpg",
      name: "Counter Model 238867",
      category: "Counters",
    },
    {
      img: "/counter/IMG-20260204-WA0025.jpg",
      name: "Counter Model 238867",
      category: "Counters",
    },
    {
      img: "/counter/IMG-20260204-WA0020.jpg",
      name: "Counter Model 238867",
      category: "Counters",
    },

    { img: "/worktable/238982.jpg", name: "238982", category: "worktable" },
    { img: "/worktable/238983.jpg", name: "238983", category: "worktable" },
    { img: "/worktable/242245.jpg", name: "242245", category: "worktable" },
    { img: "/worktable/242314.jpg", name: "242314", category: "worktable" },
    { img: "/worktable/245469.jpg", name: "245469", category: "worktable" },
    {
      img: "/worktable/WhatsApp Image 2026-02-04 at 3.38.24 PM.jpeg",
      name: "Granide Table",
      category: "worktable",
    },

    { img: "/sinks/221600.jpg", name: "221600", category: "sinks-grantings" },
    { img: "/sinks/221601.jpg", name: "221601", category: "sinks-grantings" },
    { img: "/sinks/221602.jpg", name: "221602", category: "sinks-grantings" },

    { img: "/sinks/239025.jpg", name: "239025", category: "sinks-grantings" },
    { img: "/sinks/242409.jpg", name: "242409", category: "sinks-grantings" },
    { img: "/sinks/242410.jpg", name: "242410", category: "sinks-grantings" },
    { img: "/sinks/244127.jpg", name: "244127", category: "sinks-grantings" },
    {
      img: "/sinks/IMG-20260204-WA0017.jpg",
      name: "244127",
      category: "sinks-grantings",
    },
    {
      img: "/sinks/IMG-20260204-WA0060.jpg",
      name: "244127",
      category: "sinks-grantings",
    },

    {
      img: "/sinks/1000025951.jpg",
      name: "1000025951",
      category: "sinks-grantings",
    },

    {
      img: "/WhatsApp Image 2026-02-04 at 3.55.20 PM (1).jpeg",
      name: "hood Type Dishwasher ",
      category: "Other Equipments",
    },
    {
      img: "/dustbin-1.jpeg",
      name: "Commercial Dustbin",
      category: "Other Equipments",
    },
    {
      img: "/public/racks/trolly.jpg",
      name: "Trollys",
      category: "Other Equipments",
    },
    {
      img: "/public/WhatsApp Image 2026-02-04 at 3.55.20 PM.jpeg",
      name: "Conveyor Dishwasher",
      category: "Other Equipments",
    },
    {
      img: "/public/WhatsApp Image 2026-02-04 at 3.55.21 PM.jpeg",
      name: "Under Counter Dishwasher ",
      category: "Other Equipments",
    },
    {
      img: "/public/IMG-20260204-WA0012.jpg",
      name: "Korean Dishlanding Table ",
      category: "Other Equipments",
    },
    {
      img: "/public/IMG-20260204-WA0016.jpg",
      name: "Korean Dishlanding Table Under Counter ",
      category: "Other Equipments",
    },
    {
      img: "/public/IMG-20260204-WA0048.jpg",
      name: "Service Trolley ",
      category: "Other Equipments",
    },
    {
      img: "/public/IMG-20260204-WA0015.jpg",
      name: "Service Trolley ",
      category: "Other Equipments",
    },
    {
      img: "/public/IMG-20260204-WA0013.jpg",
      name: "Platform Trolley",
      category: "Other Equipments",
    },
    {
      img: "/public/IMG-20260204-WA0061.jpg",
      name: "Batter Stand",
      category: "Other Equipments",
    },
    {
      img: "/public/IMG-20260204-WA0056.jpg",
      name: "Batter Stand",
      category: "Other Equipments",
    },

    {
      img: "/refrigirators/238505.jpg",
      name: "238505",
      category: "refigrators",
    },
    {
      img: "/refrigirators/IMG-20260204-WA0030.jpg",
      name: "238505",
      category: "refigrators",
    },
    {
      img: "/refrigirators/238507.jpg",
      name: "238507",
      category: "refigrators",
    },
    {
      img: "/refrigirators/238513.jpg",
      name: "238513",
      category: "refigrators",
    },
    {
      img: "/refrigirators/238973.jpg",
      name: "238973",
      category: "refigrators",
    },
    {
      img: "/refrigirators/242199.jpg",
      name: "242199",
      category: "refigrators",
    },
    {
      img: "/refrigirators/242300.jpg",
      name: "242300",
      category: "refigrators",
    },
    {
      img: "/refrigirators/243497.jpg",
      name: "243497",
      category: "refigrators",
    },
    {
      img: "/refrigirators/WhatsApp Image 2026-02-04 at 2.32.05 PM.jpeg",
      name: "243498",
      category: "refigrators",
    },

    {
      img: "/refrigirators/243500.jpg",
      name: "243500",
      category: "refigrators",
    },

    {
      img: "/refrigirators/246488.jpg",
      name: "246488",
      category: "refigrators",
    },
    {
      img: "/refrigirators/246489.jpg",
      name: "246489",
      category: "refigrators",
    },

    {
      img: "/bainmaries/IMG-20260204-WA0018.jpg",
      name: "Sneeze Guard bainmaries",
      category: "bain-maries",
    },
    {
      img: "/bainmaries/238480.jpg",
      name: "Bain marie",
      category: "bain-maries",
    },
    {
      img: "/bainmaries/238481.jpg",
      name: "Bain marie ",
      category: "bain-maries",
    },

    {
      img: "/bainmaries/WhatsApp Image 2026-02-04 at 3.26.32 PM.jpeg",
      name: "Bain marie GN",
      category: "bain-maries",
    },
    {
      img: "/bainmaries/WhatsApp Image 2026-02-04 at 3.27.32 PM.jpeg",
      name: "Bain marie round container",
      category: "bain-maries",
    },
    {
      img: "/bainmaries/WhatsApp Image 2026-02-04 at 3.30.30 PM.jpeg",
      name: "Glass bain marie",
      category: "bain-maries",
    },
    {
      img: "/bainmaries/WhatsApp Image 2026-02-04 at 3.32.44 PM.jpeg",
      name: "Buffet bain marie",
      category: "bain-maries",
    },

    {
      img: "/exhaust&fresh-air/WhatsApp Image 2026-02-04 at 2.53.34 PM.jpeg",
      name: "GI Ducting",
      category: "exhaust&fresh-air",
    },
    {
      img: "/exhaust&fresh-air/WhatsApp Image 2026-02-04 at 2.53.35 PM.jpeg",
      name: "Blower",
      category: "exhaust&fresh-air",
    },
    {
      img: "/exhaust&fresh-air/WhatsApp Image 2026-02-04 at 2.53.46 PM.jpeg",
      name: "Exhaust Hood WIth Filter",
      category: "exhaust&fresh-air",
    },
    {
      img: "/exhaust&fresh-air/WhatsApp Image 2026-02-04 at 2.55.56 PM.jpeg",
      name: "Fresh Air Unit",
      category: "exhaust&fresh-air",
    },

    {
      img: "/kitchen-macines/239167.jpg",
      name: "239167",
      category: "kitchen-macines",
    },

    {
      img: "/kitchen-macines/239182.jpg",
      name: "Dough kneader",
      category: "kitchen-macines",
    },
    {
      img: "/kitchen-macines/WhatsApp Image 2026-02-04 at 3.23.08 PM.jpeg",
      name: "Vegitable Cutter",
      category: "kitchen-macines",
    },
    {
      img: "/kitchen-macines/WhatsApp Image 2026-02-04 at 3.19.19 PM.jpeg",
      name: "Conventional grider",
      category: "kitchen-macines",
    },
    {
      img: "/kitchen-macines/WhatsApp Image 2026-02-04 at 3.20.13 PM.jpeg",
      name: "Tilting Grider",
      category: "kitchen-macines",
    },

    {
      img: "/steam-eqp/222420.jpg",
      name: "222420",
      category: "steam-equipments",
    },
    {
      img: "/steam-eqp/222421.jpg",
      name: "222421",
      category: "steam-equipments",
    },
    {
      img: "/steam-eqp/222423.jpg",
      name: "222423",
      category: "steam-equipments",
    },
    {
      img: "/steam-eqp/238483.jpg",
      name: "238483",
      category: "steam-equipments",
    },

    {
      img: "/Hotel-shoppee/221594.jpg",
      name: "Deep Fat Fryer",
      category: "Hotel-shoppee",
    },
    {
      img: "/Hotel-shoppee/241601.jpg",
      name: "Oven",
      category: "Hotel-shoppee",
    },
    {
      img: "/Hotel-shoppee/243325.jpg",
      name: "Sandwich Griller",
      category: "Hotel-shoppee",
    },
    {
      img: "/Hotel-shoppee/WhatsApp Image 2026-02-04 at 3.50.32 PM.jpeg",
      name: "toaster",
      category: "Hotel-shoppee",
    },

    {
      img: "/Hotel-shoppee/243429.jpg",
      name: "POP Corn Maker",
      category: "Hotel-shoppee",
    },
    {
      img: "/Hotel-shoppee/WhatsApp Image 2026-02-04 at 3.51.40 PM.jpeg",
      name: "Salamander",
      category: "Hotel-shoppee",
    },

    {
      img: "/bakery-equipments/IMG-20260204-WA0066.jpg",
      name: "1000026006",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/IMG-20260204-WA0040.jpg",
      name: "1000026007",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/IMG-20260204-WA0044.jpg",
      name: "1000026008",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/IMG-20260204-WA0047.jpg",
      name: "1000026009",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.05.21 PM.jpeg",
      name: "Rotary Oven",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.07.09 PM.jpeg",
      name: "Deck Oven",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.09.08 PM.jpeg",
      name: "Convection Oven",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.10.45 PM.jpeg",
      name: "Spiral Mixer",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.12.08 PM.jpeg",
      name: "Planetary Mixer",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.13.42 PM.jpeg",
      name: "Dough Sheeter",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.14.40 PM.jpeg",
      name: "Bread Slicer",
      category: "bakery equipments",
    },
    {
      img: "/bakery-equipments/WhatsApp Image 2026-02-04 at 3.17.22 PM.jpeg",
      name: "Pizza Oven",
      category: "bakery equipments",
    },

    { img: "/racks/pot-racks.jpg", name: "pot-racks", category: "storage" },
    {
      img: "/racks/racks2.jpg",
      name: "S-S-STORAGE-RACK-5-SHELVES",
      category: "storage",
    },

    {
      img: "/dining-tables/238529.jpg",
      name: "238529",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238530.jpg",
      name: "238530",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238531.jpg",
      name: "238531",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238532.jpg",
      name: "238532",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238533.jpg",
      name: "238533",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238536.jpg",
      name: "238536",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238537.jpg",
      name: "238537",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238538.jpg",
      name: "238538",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238539.jpg",
      name: "238539",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238540.jpg",
      name: "238540",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238541.jpg",
      name: "238541",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238542.jpg",
      name: "238542",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238543.jpg",
      name: "238543",
      category: "Dining table",
    },
    {
      img: "/dining-tables/238544.jpg",
      name: "238544",
      category: "Dining table",
    },
    {
      img: "/dining-tables/242030.jpg",
      name: "242030",
      category: "Dining table",
    },
    {
      img: "/dining-tables/242031.jpg",
      name: "242031",
      category: "Dining table",
    },
    {
      img: "/dining-tables/242032.jpg",
      name: "242032",
      category: "Dining table",
    },
    {
      img: "/dining-tables/IMG-20260204-WA0022.jpg",
      name: "Dining Table With Seater",
      category: "Dining table",
    },
    {
      img: "/dining-tables/IMG-20260204-WA0058.jpg",
      name: "SS Chair",
      category: "Dining table",
    },
  ];

  const categories = [
    "All",
    "gas ranges",
    "Counters",
    "worktable",
    "sinks-grantings",
    "refigrators",
    "bain-maries",
    "Dining table",
    "exhaust&fresh-air",
    "kitchen-macines",
    "steam-equipments",
    "Hotel-shoppee",
    "bakery equipments",
    "Storage",
    "Other Equipments",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}
      <section className="py-10 md:py-20 gradient-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            Explore our heavy and medium fabrication portfolio, grouped by application categories
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-5 bg-white/95 backdrop-blur-sm sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex overflow-x-auto gap-3 pb-2 md:flex-wrap md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 md:flex-shrink ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-2 text-sm md:text-base">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section className="py-20 gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Capability <span className="text-primary">Catalogue</span>
            </h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
            <p className="section-subtitle">
              Download or view our complete profile and product capability document
            </p>
          </div>

          {/* Catalogue Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/CATLOGUE.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Catalogue
            </a>
            <a
              href="/CATLOGUE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Open in New Tab
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <iframe
              src="/CATLOGUE.pdf"
              width="100%"
              height="800"
              style={{ border: 0 }}
              title="Darshika Fab Tech Product Catalogue"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interested in Our Products?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Share your drawings, quantity, material grade, and target timeline.
              We will provide a structured quote and fabrication plan.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
