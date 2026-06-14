import { useState } from "react";
import SearchBar from "../SearchBar";
import ProductTable from "../ProductTable";
import type { Product } from "../../../../types/types";

interface FilterableProductTableProps {
  products: Product[];
}

export default function FilterableProductTable({ products }: FilterableProductTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}