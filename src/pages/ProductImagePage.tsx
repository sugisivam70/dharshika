import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const ProductImagePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const srcParam = searchParams.get('src');
  const nameParam = searchParams.get('name');

  if (!srcParam) {
    return (
      <div className="min-h-screen pt-28 pb-16 gradient-light">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Image not found</h1>
          <p className="text-gray-600 mb-8">The product image link is missing or invalid.</p>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const imageSrc = srcParam;
  const imageName = nameParam ?? 'Product image';

  return (
    <div className="min-h-screen pt-28 pb-16 gradient-light">
      <div className="container-custom">
        <div className="mb-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{imageName}</h1>
          </div>
          <div className="p-4 md:p-8 bg-gray-50">
            <img
              src={encodeURI(imageSrc)}
              alt={imageName}
              className="w-full max-h-[80vh] object-contain rounded-xl bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImagePage;
