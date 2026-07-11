const filterProducts = (products, filters) => {
    let result = [...products];
  
    const {
      category,
      minPrice,
      maxPrice,
      rating,
      sort,
    } = filters;
  
    // Category Filter
    if (category) {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
    }
  
    // Price Filter
    if (minPrice) {
      result = result.filter(
        (product) => product.price >= Number(minPrice)
      );
    }
  
    if (maxPrice) {
      result = result.filter(
        (product) => product.price <= Number(maxPrice)
      );
    }
  
    // Rating Filter
    if (rating) {
      result = result.filter(
        (product) => product.rating >= Number(rating)
      );
    }
  
    // Sorting
    if (sort === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    }
  
    if (sort === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    }
  
    if (sort === "topRated") {
      result.sort((a, b) => b.rating - a.rating);
    }
  
    return result;
  };
  
  module.exports = filterProducts;