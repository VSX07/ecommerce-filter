function ProductCard({ product }) {
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          width="180"
        />
  
        <h3>{product.name}</h3>
  
        <p>{product.category}</p>
  
        <h4>₹ {product.price}</h4>
  
        <p>⭐ {product.rating}</p>
      </div>
    );
  }
  
  export default ProductCard;