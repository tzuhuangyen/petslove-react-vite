import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

function ProductDetail({ product, isFavorite }) {
  return (
    <div>
      <section>
        <div className="product-detail">
          <div className="container">
            <div className="row">
              {/*<!-- 產品照片 -->*/}
              <div className="col-12 col-md-6">
                <img
                  className="product-detail-img card-img-top"
                  src="./images/proddetail-10.jpeg"
                  alt="產品照片"
                />
              </div>
              {/*<!-- 產品概況 -->*/}
              <div className="col-12 col-md-6">
                <div className="card m-0">
                  <div className="card-body text-start">
                    <h3 className="card-title">fish</h3>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Popular order
                    </h6>
                    <div className="mb-2">
                      <div className="ratings">
                        <div className="empty_star">★★★★★</div>
                        <div className="full_star">★★★★★</div>
                      </div>
                    </div>

                    <h5 className="price fs-5">NT$140</h5>
                    <ul className="card-text text-start">
                      <li>100%</li>
                      <li>fresh fish</li>
                      <li>protein</li>
                      <li>low cholesterol</li>
                    </ul>
                    <div className="d-flex justify-content-center align-items-center">
                      {/*<!-- 數量  -->*/}
                      <div className="amount me-2">
                        <span>number</span>
                        <select className="amountBox">
                          <option defaultValue="1" selected="">
                            1
                          </option>
                          <option defaultValue="2">2</option>
                          <option defaultValue="3">3</option>
                          <option defaultValue="4">4</option>
                          <option defaultValue="5">5</option>
                        </select>
                      </div>
                      {/*<!-- 加入購物車/收欌按鈕 --> */}
                      <div className="text-center">
                        <p>{isFavorite ? "Favorite" : "Not Favorite"}</p>

                        <button
                          className=" btnHeart"
                          onClick={() => toggleFavorite(productType.id)}
                        >
                          <CiHeart />
                        </button>
                        <a href="#" className="card-link btn btn-primary">
                          {" "}
                          add
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- 訊息細節選單 -->*/}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {/* <!-- 商品規格 -->*/}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  商品規格
                </button>
              </li>
              {/*  <!-- 注意事項 -->*/}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  注意事項
                </button>
              </li>
              {/*<!-- 運送付款 -->*/}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  運送付款
                </button>
              </li>
            </ul>
            {/*<!-- 選單內頁 --> */}
            <div className="tab-content" id="myTabContent">
              {/*<!-- 商品規格內頁 --> */}
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  {/*<!-- 產品內容 --> */}
                  <div className="col-12 col-md-6 mb-4 mt-md-4">
                    <div className="card-body">
                      <h3 className="card-title text-center border-bottom">
                        產品內容
                      </h3>
                      <p>
                        高耐咬性的筋類食材提供毛孩咀嚼的樂趣
                        增加咀嚼的時間以及與牙齒摩擦的機會，
                        為毛孩最天然的潔牙骨 富有嚼勁的耐咬食材，
                        讓狗狗能長時間的啃咬、紓壓，
                        除了提供物理性的摩擦外，更搭配獨家口腔保健配方，
                        讓狗狗享用零食時也能維持口腔清新健康
                      </p>
                    </div>
                  </div>
                  {/*<!-- 營養標籤 -->*/}
                  <div className="col-12 col-md-6 mb-4 my-md-5 mt-md-5">
                    <div className="card nutrition text-center mb-2">
                      <div className="card-body">
                        <h3 className="card-title mb-3">營養標示</h3>

                        <h6 className="card-subtitle mb-2 text-muted">
                          每一份量50g
                          <br />
                          本包裝含1份
                        </h6>
                        <ul className="card-text list-unstyled fs-4 px-3">
                          <li className="d-flex justify-content-between">
                            <p>脂肪</p>
                            <p>5%以上</p>
                          </li>
                          <li className="d-flex justify-content-between">
                            <p>纖維</p>
                            <p>5%以上</p>
                          </li>
                          <li className="d-flex justify-content-between">
                            <p>蛋白質</p>
                            <p>50%以上</p>
                          </li>
                          <li className="d-flex justify-content-between">
                            <p>水份</p>
                            <p>50%以上</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 注意事項內頁 --> */}
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  {/* <!-- 有效期限 -->*/}
                  <div
                    className="col-12 col-md-6 mb-4 my-md-5"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <div className="card-body text-center p-0">
                      <h3 className="card-title mb-3">有效期限</h3>
                      <h4>未拆封</h4>
                      <ul className="list-unstyled">
                        <li>常溫7-10天(建議不要)</li>
                        <li>冷藏30天(退冰10分鐘)</li>
                        <li>冷凍90天(退冰30分鐘)</li>
                      </ul>
                      <h4>拆封後</h4>
                      <ul className="list-unstyled">
                        <li>夾鏈袋/密封保存</li>
                        <li>有效期限約3-4天</li>
                        <li>以冷藏方式保存並盡快餵食完畢</li>
                      </ul>
                    </div>
                  </div>
                  {/*<!-- notice -->*/}
                  <div
                    className="col-12 col-md-6 mb-4 my-md-5"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <h3 className="card-title mb-3 text-center">餵食小提醒</h3>

                    <p>
                      若毛孩為初次品嚐／狼吞虎嚥／老犬(牙口沒那麼好)類型，餵食時請在旁隨時留意狀況，避免毛孩直接吞食。
                      本商品可作為訓練或獎勵毛孩時食用，切忌過量，避免造成毛孩腸餵不適。
                    </p>
                  </div>
                </div>
              </div>
              {/*<!-- 運送付款內頁 -->*/}
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row">
                  {/*<!-- 運送方式 -->*/}
                  <div
                    className="col-12 col-md-6 mb-4"
                    data-aos="flip-left"
                    data-aos-duration="1200"
                  >
                    <div className="card-body">
                      <h3 className="card-title text-center mb-3">運送方式</h3>

                      <ul>
                        <li>工作室取貨：高雄市 三民區 中山公園</li>
                        <li>超商取貨：7-ELEVEN / 全家便利店 / 萊爾富</li>
                        <li>零食黑貓常溫宅配</li>
                        <li>蛋糕黑貓冷凍宅配</li>
                      </ul>
                    </div>
                  </div>
                  {/*<!-- pay -->*/}
                  <div
                    className="col-12 col-md-6 p-3 mb-4"
                    data-aos="flip-right"
                    data-aos-duration="1200"
                  >
                    <h3 className="card-title mb-3 text-center">付款方式</h3>
                    <ul>
                      <li>工作室自取付款</li>
                      <li>銀行轉帳：請將後五碼 / 匯款日，留在備註欄給賣家</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
