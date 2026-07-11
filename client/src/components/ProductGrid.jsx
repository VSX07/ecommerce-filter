import ProductCard from "./ProductCard";

function ProductGrid({ products, setFilters }) {
  if (products.length === 0) {
    return (
      <div>
        <h2>No Products Found</h2>

        <button
          onClick={() =>
            setFilters({
              category: "",
              minPrice: "",
              maxPrice: "",
              rating: "",
              sort: "",
            })
          }
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;