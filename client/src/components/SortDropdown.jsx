function SortDropdown({ filters, setFilters }) {
    return (
      <div style={{ marginBottom: "20px" }}>
        <select
          value={filters.sort}
          onChange={(e) =>
            setFilters({
              ...filters,
              sort: e.target.value,
            })
          }
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price Low → High</option>
          <option value="priceHigh">Price High → Low</option>
          <option value="topRated">Top Rated</option>
        </select>
      </div>
    );
  }
  
  export default SortDropdown;