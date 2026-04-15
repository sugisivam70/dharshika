import React from "react";
import { Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

type Product = {
  img: string;
  name: string;
};

type ProductGroup = {
  category: string;
  folder?: string;
  files: string[];
};

const VISIBLE_PRODUCT_LIMIT = 15;

const productGroups: ProductGroup[] = [
  {
    category: "Gas Ranges",
    folder: "gas-ranges",
    files: [],
  },
  {
    category: "Worktable",
    folder: "worktable",
    files: [
      "product1.jpeg",
      "product2.jpeg",
      "238982.jpg",
      "238983.jpg",
      "product3.jpeg",
      "product6.jpeg",
      "product10.jpeg",
      "product8.jpeg",
      'product9.jpeg',
      "242245.jpg",
      "242314.jpg",
      "245469.jpg",
      "product4.jpeg",
    ],
  },
  {
    category: "Sinks",
    folder: "sinks",
    files: [
      "221600.jpg",
      "221601.jpg",
      "221602.jpg",
      "238872.jpg",
      "239025.jpg",
      "242409.jpg",
      "242410.jpg",
      "244127.jpg",
      "246490.jpg",
      "3 SINK UNIT.jpg",
      "IMG-20260204-WA0017.jpg",
      "IMG-20260204-WA0060.jpg",
    ],
  },
  {
    category: "Steam Equipment",
    folder: "steam-eqp",
    files: [],
  },
  {
    category: "Exhaust & Fresh Air",
    folder: "exhaust&fresh-air",
    files: [
      "WhatsApp Image 2026-02-04 at 2.53.34 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 2.53.35 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 2.53.36 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 2.53.46 PM.jpeg",
    ],
  },
  {
    category: "Bakery Equipments",
    folder: "bakery-equipments",
    files: [
      "WhatsApp Image 2026-02-04 at 3.05.21 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 3.07.09 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 3.15.57 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 3.17.22 PM.jpeg",
    ],
  },
  {
    category: "Bainmaries",
    folder: "bainmaries",
    files: [
      "238479.jpg",
      "238480.jpg",
      "238481.jpg",
      "245628.jpg",
      "245629.jpg",
      "IMG-20260204-WA0018.jpg",
      "WhatsApp Image 2026-02-04 at 3.26.32 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 3.27.32 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 3.30.30 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 3.32.44 PM.jpeg",
      "WhatsApp Image 2026-02-04 at 3.47.58 PM.jpeg",
    ],
  },
  {
    category: "Racks",
    folder: "racks",
    files: ["pot-racks.jpg", "racks2.jpg", "trolly.jpg"],
  },
  {
    category: "Other Products",
    files: ["IMG-20260204-WA0013.jpg", "IMG-20260204-WA0015.jpg"],
  },
];

const formatProductName = (fileName: string): string =>
  fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const products: Product[] = productGroups.flatMap((group) =>
  group.files.map((fileName) => ({
    img: group.folder
      ? `/dharshika-prd/${group.folder}/${fileName}`
      : `/dharshika-prd/${fileName}`,
    name: formatProductName(fileName),
  })),
);

const ProductsPage: React.FC = () => {
  const [showAllProducts, setShowAllProducts] = React.useState(false);

  const visibleProducts = showAllProducts
    ? products
    : products.slice(0, VISIBLE_PRODUCT_LIMIT);

  return (
    <div className="min-h-screen pt-10">
      <section className="py-10 md:py-20 gradient-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            Product images loaded from the dharshika-prd collection. Open any
            card to view the full image on a new page.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-sm md:text-base text-gray-600">
              Showing {visibleProducts.length} of {products.length} products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {visibleProducts.map((product, index) => (
              <Link
                key={`${product.img}-${index}`}
                to={`/product-image?src=${encodeURIComponent(product.img)}&name=${encodeURIComponent(product.name)}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={encodeURI(product.img)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          {!showAllProducts && products.length > VISIBLE_PRODUCT_LIMIT && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllProducts(true)}
                className="btn-primary inline-flex items-center gap-2 !py-2 !px-5"
              >
                <ImageIcon size={18} />
                View All Products
              </button>
            </div>
          )}
          {showAllProducts && products.length > VISIBLE_PRODUCT_LIMIT && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllProducts(false)}
                className="btn-secondary inline-flex items-center gap-2 !py-2 !px-5"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
