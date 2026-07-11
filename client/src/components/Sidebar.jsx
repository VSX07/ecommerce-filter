function Sidebar({ filters, setFilters }) {
    return (
      <div
        style={{
          width: "250px",
          border: "1px solid gray",
          padding: "15px",
        }}
      >
        <h3>Filters</h3>
  
        <h4>Category</h4>
  
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({
              ...filters,
              category: e.target.value,
            })
          }
        >
          <option value="">All</option>
          <option>Electronics</option>
          <option>Footwear</option>
          <option>Apparel</option>
        </select>
  
        <h4>Min Price</h4>
  
        <input
          type="number"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              minPrice: e.target.value,
            })
          }
        />
  
        <h4>Max Price</h4>
  
        <input
          type="number"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              maxPrice: e.target.value,
            })
          }
        />
  
        <h4>Rating</h4>
  
        <select
          value={filters.rating}
          onChange={(e) =>
            setFilters({
              ...filters,
              rating: e.target.value,
            })
          }
        >
          <option value="">All</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>
  
        <br />
        <br />
  
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
  
  export default Sidebar;