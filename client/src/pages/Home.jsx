import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import SortDropdown from "../components/SortDropdown";
import API from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
    sort: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products", {
        params: filters,
      });

      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Sidebar filters={filters} setFilters={setFilters} />

      <div style={{ flex: 1 }}>
        <SortDropdown filters={filters} setFilters={setFilters} />

        <ProductGrid products={products} setFilters={setFilters} />
      </div>
    </div>
  );
}

export default Home;