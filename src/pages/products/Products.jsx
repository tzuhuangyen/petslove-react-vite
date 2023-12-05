import React, { useState, useEffect } from "react";
import "./products.css";
import datas from "./datas.json";

//Tab Filter product component
const Products = () => {
  // const [filterOrderType, setFilterOrderType] = useState("all"); // filter狀態變數
  const [filterTab, setFilterTab] = useState("all"); //filter tab active
  const [products, setProducts] = useState(datas);
  const [sortType, setSortType] = useState("asc"); // 初始排序方式為升序
  const [sortedAndFilteredProducts, setSortedAndFilteredProducts] = useState(
    []
  );
  const tabItems = ["pre-order", "in-stock", "customized", "all"];
  //handle filter by meat type click
  const handleTabClick = (tabOrder) => {
    console.log("Clicked tab:", tabOrder); // 檢查控制台輸出

    setFilterTab(tabOrder);
  };

  // handle sort click
  //hanle sort by typeof meat and price
  const handleSortType = (selectedValue) => {
    console.log("what meat be selected:", selectedValue); // 檢查控制台輸出

    setSortType(selectedValue);
    if (selectedValue === "asc" || selectedValue === "desc") {
      setSortType(selectedValue);
      // 如果是价格排序选项，只更新排序选项，不更新商品类型选项
    } else {
      // 如果是商品类型选项，更新商品类型选项，并将排序选项重置为默认值
      setSortType(selectedValue);
      setSortType("asc");
    }
  };
  const uniqueTypes = ["all", "chicken", "beef", "pork", "duck", "other"];

  const filterAndSortProducts = () => {
    let filteredProducts = products;

    if (filterTab !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.order === filterTab
      );
    }
    // if (uniqueTypes !== "all") {
    //   filteredProducts = filteredProducts.filter(
    //     (product) => product.type === filterOrderType
    //   );
    // }
    if (sortType === "asc") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "desc") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
    setSortedAndFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    filterAndSortProducts();
  }, [sortType, filterTab, products]);

  // Card component: create a product card JSX(Product)
  const CreateDataCard = ({ data }) => {
    return (
      <div key={data.id} className="products col-lg-3 ">
        <div className="card mb-4 shadow-sm">
          <img
            src={data.img_url}
            className="card-img-top object-fit "
            alt="product"
            style={{ height: "170px" }}
          />
          <div className="card-body">
            <p className="card-text">{data.order}</p>
            <p className="card-text">{data.name}</p>
            <p className="card-text">Price: ${data.price}</p>
            <p className="card-text">Type: {data.type}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        {/* Filter by order */}
        <div className="filternSort btns d-flex justify-content-between align-items-center">
          {/* Filter by order tab btn */}
          <nav className="filterTabs">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {tabItems.map((tabOrder) => (
                <div key={tabOrder} className={`nav-item`}>
                  <button
                    className={`nav-link ${
                      filterTab === tabOrder ? "active" : ""
                    }`}
                    id={`nav-${tabOrder}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#nav-${tabOrder}`}
                    ㄟrder="button"
                    role="tab"
                    aria-controls={`nav-${tabOrder}`}
                    aria-selected={filterTab === tabOrder ? "true" : "false"}
                    onClick={() => handleTabClick(tabOrder)}
                  >
                    {/* Button content */}
                    {tabOrder === "pre-order"
                      ? "Pre-Order"
                      : tabOrder === "in-stock"
                      ? "In Stock"
                      : tabOrder === "customized"
                      ? "Customized"
                      : "All Products"}
                  </button>
                </div>
              ))}
            </div>
          </nav>
          {/* btnTabs for sorted */}
          {/* Sort dropdown */}
          <div className=" sortBtn">
            <label htmlFor="sortSelect">Sort:</label>
            <select
              id="sortSelect"
              className="filterSelect"
              defaultValue={"increase"}
              onChange={(e) => handleSortType(e.target.value)}
            >
              <option value="asc">High to Low </option>
              <option value="desc">Low to High</option>
              <option value="pork">Pork</option>
              <option value="duck">Duck</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Filter by order result content */}
        <div className="tab-content" id="nav-tabContent">
          {tabItems.map((tabOrder) => (
            <div
              key={tabOrder}
              className={`tab-pane fade ${
                filterTab === tabOrder ? "active show" : ""
              }`}
              id={`nav-${tabOrder}`}
              role="tabpanel"
              aria-labelledby={`nav-${tabOrder}-tab`}
            >
              <div className="row">
                {sortedAndFilteredProducts.map((product) => (
                  <CreateDataCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
