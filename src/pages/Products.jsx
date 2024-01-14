import React, { useState, useEffect, useReducer } from "react";
// import { useContext } from "react";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import CartNavbar from "../components/CartNavbar";
import Cart from "../components/Cart";
import { CartContext } from "../Store";

//add to cart click dispatch function
const cartReducer = (state, action) => {
  const { cartList } = state;

  switch (action.type) {
    case "ADD_TO_CART":
      console.log("action:", action);
      cartList.push(action.payload);
      return { ...state, cartList: [...state.cartList, action.payload] };
    // Handle other cases as needed
    default:
      return state;
  }
};

const Products = () => {
  //取得原始資料
  const [jsonData, setJsonData] = useState();
  //search
  const [text, setText] = useState([]);
  //filter
  const [productTypes, setProductTypes] = useState([]);
  //sort price
  const [sortPrice, setSortPrice] = useState("asc");
  //toggleFavorite function
  const [favorites, setFavorites] = useState([]);
  //add to cart dispatch function

  const [state, dispatch] = useReducer(cartReducer, { cartList: [] });

  // const [state, dispatch] = useContext(CartContext);
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
  const handleSortPrice = () => {
    const sortedProducts = [...productTypes];

    sortedProducts.sort((a, b) =>
      sortPrice === "asc" ? b.price - a.price : a.price - b.price
    );
    console.log("Sorted Products:", sortedProducts);

    setProductTypes(sortedProducts);
    setSortPrice((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
  };

  //check item is already in favorite list
  const isFavorite = (productId) => favorites.includes(productId);
  // favorite function
  const toggleFavorite = (productId) => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(productId);

    if (index !== -1) {
      // if item is already in the favorites array. Remove from favorites
      updatedFavorites.splice(index, 1);
    } else {
      // or Add to favorites
      updatedFavorites.push(productId);
    }
    //update state
    setFavorites(updatedFavorites);
    //update local storage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    console.log("Updated Favorites:", updatedFavorites);
  };
  // 取得favorites資料load the favorites from local storage when the component mounts.
  useEffect(() => {
    // Load favorites from local storage on mount
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // filter favorite function
  const filterFavorites = () => {
    const favoriteProducts = jsonData.filter((product) => {
      return isFavorite(product.id);
    });
    setProductTypes(favoriteProducts);
    console.log(favoriteProducts);
  };
  // Card component: create a product card JSX(Product)
  const CreateDataCard = ({ productType }) => {
    const isProductFavorite = isFavorite(productType.id);

    return (
      <div className="col" key={productType.id}>
        <div className="card mb-4 shadow-sm productCard">
          <img
            src={productType.img_url}
            className="card-img-top object-fit "
            alt="product"
          />
          <div className="card-body">
            <p className="card-title">
              {productType.name}
              <span className="card-text float-end">${productType.price}</span>
            </p>
            <div className="d-flex justify-content-between align-end  ">
              <p className="card-text">Type: {productType.type}</p>
              <span className="card-text">{productType.order}</span>
            </div>
            <div className="btns cardBtns">
              <button
                className={`btnHeart btn-purple-outline ${
                  isProductFavorite ? "favorited" : ""
                }`}
                onClick={() => toggleFavorite(productType.id)}
              >
                <MdFavoriteBorder />
              </button>
              <button
                type="button"
                className=" btnCart"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { ...productType, quantity: 1 },
                  });
                }}
              >
                <CiShoppingCart />
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  };

  return (
    <>
      {/*JSON.stringify(productTypes)*/}
      <CartContext.Provider value={{ state, dispatch }}>
        <div className="container-lg">
          <CartNavbar />
          <SearchBox />
          <div className="filterbtns mb-4 d-flex justify-content-between align-items-center">
            <div className="typeBtns">
              <button
                id="filter-preOrder"
                onClick={() => handleFilters("order")}
              >
                order
              </button>
              <button
                id="filter-inStock"
                className="btn-purple"
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
            {/* filter favorite */}
            <button
              id="filter-favorite"
              className="filterFavoBtn"
              onClick={() => filterFavorites()}
            >
              <MdFavoriteBorder />
            </button>
          </div>
          {/* Filter by order result content */}
          <div className="row">
            <div className="col-md-7">
              <div className="row row-cols-3 g-3">
                {productTypes.map((productType) => (
                  <CreateDataCard
                    productType={productType}
                    key={productType.id}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <Cart />
            </div>
          </div>
        </div>
      </CartContext.Provider>
    </>
  );
};

export default Products;
