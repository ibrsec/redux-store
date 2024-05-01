import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../store/productReducer";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: routeID } = useParams();
  const products = useSelector((state) => state.product.products);

  console.log("products", products);
  const item = products?.filter((item) => item?.id == routeID)[0] || JSON.parse(localStorage.getItem("itemDetailPage"));
  console.log("item", item);
  localStorage.setItem("itemDetailPage",JSON.stringify(item));

  const { id, category, description, image, price, title } = item;
  const basketGlobal = useSelector((state) => state.product.basket);

  const handleAddTOChart = (id) => {
    !basketGlobal?.map((item) => item.product.id).includes(id) &&
      dispatch(addBasket(item));

    //
  };
  useEffect(() => {
    localStorage.setItem("basketGlobal", JSON.stringify(basketGlobal));
  }, [basketGlobal]);

  return (
    <div className="container-box flex justify-center my-5">
    <div className=" max-w-[600px] max-h-[700px] bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img
          className="rounded-t-lg h-[40%] w-[100%] object-contain"
          src={image}
          alt=""
        />
      </a>
      <div className="p-5">
        <span>
          <h5 className="mb-2 text-md font-[500] tracking-tight text-gray-900  ">
            {title}
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  ">
          {description}
        </p>
        <p className="mb-3 font-normal text-black   ">
          Category: {category}
        </p>
        <span className="my-5 text-black">Price: {price}$</span>
        <div className="my-3 flex items-center justify-left mt-1 flex-wrap gap-1">
           <button className="btn" onClick={()=>navigate(-1)}>Back</button>
          <button className="btn text-sm" onClick={() => handleAddTOChart(id)}>
            Add to Cart
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
