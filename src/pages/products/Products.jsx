//search box
//filter orders
//filter meats
//sort price

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import "./products.css";
import datas from "./datas.json";
//search box
const SearchBox = ({ text, onSearchHandler }) => {
  return (
    <>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        className="form-control"
        value={text}
        onChange={onSearchHandler}
        placeholder="search...type of meat"
      />
    </>
  );
};

//Tab Filter product component
const Products = () => {
  const [text, setText] = useState("");

  // const [filterOrderType, setFilterOrderType] = useState("all"); // filter狀態變數
  const [filterTab, setFilterTab] = useState("all"); //filter tab active
  const [sortPrice, setSortPrice] = useState("asc"); // 初始排序方式為升序
  const [allProducts, setAllProducts] = useState(datas);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const tabItems = ["pre-order", "in-stock", "customized", "all"];
  {
    /* console.log(datas.filter((data) => data.type.toLowerCase().includes("ch")));
     */
  }
  //search handler
  const onSearchHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  // Use useEffect to set the initial state when the component mounts
  {
    /*useEffect(() => {
    setFilteredProducts(
      allProducts.toSorted((a, b) => {
        return sortPrice === "asc" ? a.price - b.price : b.price - a.price;
      })
    );
  }, [sortPrice, allProducts]);*/
  }
  useEffect(() => {
    // Filter and sort based on the search input, filter tab, and sort option
    const filteredAndSortedProducts = allProducts
      .filter((product) =>
        product.type.toLowerCase().includes(text.toLowerCase())
      )
      .filter((product) =>
        filterTab === "all" ? true : product.order === filterTab
      )
      .sort((a, b) =>
        sortPrice === "asc" ? a.price - b.price : b.price - a.price
      );

    setFilteredProducts([...filteredAndSortedProducts]);
  }, [text, filterTab, sortPrice, allProducts]);
  //handle filter by order type click
  const handleTabClick = (tabOrder) => {
    console.log("Clicked tab:", tabOrder);
    setFilterTab(tabOrder);

    {
      /*if (tabOrder === "all") {
      setFilteredProducts(
        datas.toSorted((a, b) => {
          return sortPrice === "asc" ? a.price - b.price : b.price - a.price;
        })
      );
    } else {
      setFilteredProducts(
        datas
          .filter((item) => item.order === tabOrder)
          .toSorted((a, b) => {
            return sortPrice === "asc" ? a.price - b.price : b.price - a.price;
          })
      );
    }
  */
    }
  };

  // handle sort click
  //hanle sort by typeof meat and price
  const handleSortPrice = (selectedSortPrice) => {
    console.log("what meat be selected:", selectedSortPrice); // 檢查控制台輸出
    setSortPrice(selectedSortPrice);

    {
      /*setFilteredProducts((products) =>
      products.toSorted((a, b) =>
        selectedSortPrice === "asc" ? a.price - b.price : b.price - a.price
      )
    );*/
    }
  };

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
            <p className="card-text">{data.name}</p>
            <p className="card-text">Type: {data.type}</p>
            <div className="d-flex justify-content-between align-end  ">
              <div className="d-flex flex-dir-col ">
                <p className="card-text">${data.price}</p>
                <p className="card-text">{data.order}</p>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ color: "gray" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <SearchBox text={text} onSearchHandler={onSearchHandler} />
        {/* Filter by order tab*/}
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
                    order="button"
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
          {/* Sort dropdown */}
          <div className=" sortBtn">
            <label htmlFor="sortSelect">Sort:</label>
            <select
              id="sortSelect"
              className="filterSelect"
              defaultValue={"increase"}
              onChange={(e) => handleSortPrice(e.target.value)}
            >
              <option value="asc">Low to High </option>
              <option value="desc"> High to Low</option>
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
                {filteredProducts.map((product) => (
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
