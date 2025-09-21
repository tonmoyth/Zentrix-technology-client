import Product from "./Product/Product";



const products = [
  {
    id: 1,
    image: '/images/products/laptop.jpg',
    productName: 'Ultra Slim Laptop',
    productPrice: '$999',
  },
  {
    id: 2,
    image: '/images/products/phone.jpg',
    productName: 'Smartphone Pro Max',
    productPrice: '$799',
  },
  {
    id: 3,
    image: '/images/products/headphones.jpg',
    productName: 'Noise Cancelling Headphones',
    productPrice: '$199',
  },
  {
    id: 4,
    image: '/images/products/smartwatch.jpg',
    productName: 'Smart Watch Series 6',
    productPrice: '$249',
  },
  {
    id: 5,
    image: '/images/products/camera.jpg',
    productName: 'DSLR Camera 24MP',
    productPrice: '$649',
  },
  {
    id: 6,
    image: '/images/products/gaming-mouse.jpg',
    productName: 'RGB Gaming Mouse',
    productPrice: '$49',
  },
  {
    id: 7,
    image: '/images/products/keyboard.jpg',
    productName: 'Mechanical Keyboard',
    productPrice: '$89',
  },
  {
    id: 8,
    image: '/images/products/speaker.jpg',
    productName: 'Bluetooth Speaker',
    productPrice: '$59',
  },
];

function Products() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto pt-28 mb-10 min-h-[100vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map(p => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>

  );
}

export default Products;
