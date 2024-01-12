//search box
//filter orders
//filter meats
//sort price
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Products = () => {
  //取得原始資料
  const [jsonData, setJsonData] = useState();
  //search
  const [text, setText] = useState([]);
  //filter
  const [productTypes, setProductTypes] = useState([]);

  //sort price
  const [sortPrice, setSortPrice] = useState("asc");

  // 取得jsonData資料 Use useEffect to set the initial state when the component mounts
  useEffect(() => {
    (async () => {
      try {
        const datas = await axios.get("http://localhost:3000/products");
        setJsonData(datas.data);
        setProductTypes(datas.data);
        console.log("jsonData:", datas.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  //search box component
  const SearchBox = () => {
    //search handler
    const searchHandler = (event) => {
      const keyword = event.target.value;
      setText(keyword); // Update the text state directly

      if (keyword !== "") {
        const searchProducts = jsonData.filter((product) => {
          return (
            product.name.toLowerCase().includes(keyword.toLowerCase()) ||
            product.type.toLowerCase().includes(keyword.toLowerCase())
          );
        });
        setProductTypes(searchProducts);
      } else {
        setProductTypes(jsonData);
      }
    };

    return (
      <>
        <div className="mb-3">
          <label htmlFor="search"></label>
          <input
            id="search"
            type="search"
            className="form-control productSearch"
            value={text}
            onChange={searchHandler}
            placeholder="search..."
          />
        </div>
      </>
    );
  };

  //handle filter by order type click
  const handleFilters = (type) => {
    let filteredTypes;

    if (type !== "") {
      filteredTypes = jsonData.filter((productType) => {
        return productType.order === type || productType.type === type;
      });
      setProductTypes(filteredTypes);
      console.log("filteredTypes", filteredTypes);
    } else {
      setProductTypes(jsonData);
      console.log("Data:", jsonData);
    }
  };

  //hanle sort by price
  //將過濾後的產品productTypes或全部產品依價錢排序
  const handleSortPrice = () => {
    const sortedProducts = [...productTypes];

    sortedProducts.sort((a, b) =>
      sortPrice === "asc" ? b.price - a.price : a.price - b.price
    );
    console.log("Sorted Products:", sortedProducts);

    setProductTypes(sortedProducts);
    setSortPrice((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
  };
  // Card component: create a product card JSX(Product)
  const CreateDataCard = ({ productType }) => {
    return (
      <div className="col-4">
        <div className="card mb-4 shadow-sm productCard" key={productType.id}>
          <img
            src={productType.img_url}
            className="card-img-top object-fit "
            alt="product"
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <p className="card-title">{productType.name}</p>
            <p className="card-text">Type: {productType.type}</p>
            <div className="d-flex justify-content-between align-end  ">
              <span className="card-text">{productType.order}</span>
              <p className="card-text">${productType.price}</p>
            </div>
            <div className="btns productBtns">
              <button type="button" className=" btnHeart">
                <CiHeart />
              </button>
              <button type="button" className=" btnCart">
                <CiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/*JSON.stringify(productTypes)*/}
      <div className="container">
        <button
          className="btn btn-outline-dark position-relative"
          type="submit"
        >
          cart
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            99
          </span>
        </button>
        <SearchBox />
        <div className="filterbtns mb-3 d-flex justify-content-between align-items-center">
          <div className="typeBtns">
            <button id="filter-preOrder" onClick={() => handleFilters("order")}>
              order
            </button>
            <button
              id="filter-inStock"
              onClick={() => handleFilters("in-stock")}
            >
              in-stock
            </button>
            <button
              id="filter-customized"
              onClick={() => handleFilters("customized")}
            >
              customized
            </button>
            <button
              id="filter-chicken"
              onClick={() => handleFilters("chicken")}
            >
              chicken
            </button>
            <button id="filter-beef" onClick={() => handleFilters("beef")}>
              beef
            </button>
            <button id="filter-duck" onClick={() => handleFilters("duck")}>
              duck
            </button>
            <button id="reset" onClick={() => handleFilters("")}>
              Reset
            </button>
          </div>
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
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-9">
            <div className="row g-3">
              {productTypes.map((productType) => (
                <CreateDataCard
                  productType={productType}
                  key={productType.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
