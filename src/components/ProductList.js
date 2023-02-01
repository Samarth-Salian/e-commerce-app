import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import Search from './Search';
import Filter from './Filter';
import SortBy from './SortBy';
import './styles.css';

const products = [
  {
    _id: '63d67efdea780f9654f0337c',
    name: 'Product 2',
    category: 'Clothing',
    description: 'This is a sample product for clothing category',
    quantity: 20,
    price: 50,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 2',
    rating: 3.5,
    createdAt: '2023-01-29T14:13:17.396Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f0337e',
    name: 'Product 1',
    category: 'Electronics',
    description: 'This is a sample product for electronics category',
    quantity: 10,
    price: 100,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 1',
    rating: 4.5,
    createdAt: '2023-01-29T14:13:17.416Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f03384',
    name: 'Product 5',
    category: 'Category 5',
    description: 'Description 5',
    quantity: 50,
    price: 500,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 5',
    rating: 3.5,
    createdAt: '2023-01-29T14:13:17.430Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f03386',
    name: 'Product 6',
    category: 'Category 6',
    description: 'Description 6',
    quantity: 60,
    price: 600,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 6',
    rating: 4,
    createdAt: '2023-01-29T14:13:17.433Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f03388',
    name: 'Product 7',
    category: 'Category 7',
    description: 'Description 7',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 7',
    rating: 4.5,
    createdAt: '2023-01-29T14:13:17.436Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f0338a',
    name: 'Product 8',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 80,
    price: 800,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:13:17.438Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f0338c',
    name: 'Product 9',
    category: 'Category 9',
    description: 'Description 9',
    quantity: 90,
    price: 900,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 9',
    rating: 4,
    createdAt: '2023-01-29T14:13:17.441Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f03380',
    name: 'Product 3',
    category: 'Category 3',
    description: 'Description 3',
    quantity: 30,
    price: 300,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 3',
    rating: 4,
    createdAt: '2023-01-29T14:13:17.419Z',
    __v: 0,
  },
  {
    _id: '63d67efdea780f9654f03382',
    name: 'Product 4',
    category: 'Category 4',
    description: 'Description 4',
    quantity: 40,
    price: 400,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 4',
    rating: 4.5,
    createdAt: '2023-01-29T14:13:17.425Z',
    __v: 0,
  },
  {
    _id: '63d6801bea780f9654f0338e',
    name: 'Product 11',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:18:03.908Z',
    __v: 0,
  },
  {
    _id: '63d6842053cd536dba8281d7',
    name: 'Product 12',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:35:12.767Z',
    __v: 0,
  },
  {
    _id: '63d6845453cd536dba8281d9',
    name: 'Product 16',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:36:04.791Z',
    __v: 0,
  },
  {
    _id: '63d684a053cd536dba8281db',
    name: 'Product 13',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:37:20.776Z',
    __v: 0,
  },
  {
    _id: '63d684ba53cd536dba8281dd',
    name: 'Product 14',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:37:46.413Z',
    __v: 0,
  },
  {
    _id: '63d685fe53cd536dba8281e0',
    name: 'Product 15',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:43:10.931Z',
    __v: 0,
  },
  {
    _id: '63d6869feff4ca801a50a9bb',
    name: 'Product 17',
    category: 'Category 8',
    description: 'Description 8',
    quantity: 70,
    price: 700,
    imageUrl: 'https://picsum.photos/200/200',
    brand: 'Brand 8',
    rating: 3.5,
    createdAt: '2023-01-29T14:45:51.640Z',
    __v: 0,
  },
];

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(products);
  const brands = [...new Set(products.map(product => product.brand))];
  const categories = [...new Set(products.map(product => product.category))];
  const ratings = [...new Set(products.map(product => product.rating))];

  const onFilterChange = newFilters => {
    setSelectedFilters(Object.assign({}, selectedFilters, newFilters));
    const updatedSelectedFilters = Object.assign({}, selectedFilters, newFilters);

    setFilteredProducts(
      products.filter(product => {
        let brandCheck = true;
        let categoryCheck = true;
        let ratingCheck = true;

        if (updatedSelectedFilters.brand?.value.length) {
          brandCheck = updatedSelectedFilters.brand.value.includes(product.brand);
        }

        if (updatedSelectedFilters.category?.value.length) {
          categoryCheck = updatedSelectedFilters.category.value.includes(product.category);
        }

        if (updatedSelectedFilters.rating) {
          ratingCheck = updatedSelectedFilters.rating.value.includes(product.rating);
        }

        return (
          brandCheck &&
          categoryCheck &&
          ratingCheck &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  };

  const addToCart = product => {
    setCart([...cart, product]);
  };
  const handleDelete = productToDelete => {
    setCart(cart.filter(product => product !== productToDelete));
  };
  const handleSortChange = sortOption => {
    let sortedProducts = [...filteredProducts];
    switch (sortOption) {
      case 'Price low to high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price high to low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'New arrivals':
        sortedProducts.sort((a, b) => b.createdAt - a.createdAt);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="app">
      <div className="product-list">
        <Search onSearch={setSearchTerm} />
        <div className="container">
          <Filter
            brands={brands}
            categories={categories}
            ratings={ratings}
            selectedFilters={selectedFilters}
            onFilterChange={onFilterChange}
          />

          <SortBy onSortChange={handleSortChange} />
        </div>
        {filteredProducts.map(product => (
          <Product
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            brand={product.brand}
            rating={product.rating}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} handleDelete={handleDelete} />
    </div>
  );
}

export default ProductList;
