import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../store/productReducer";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, name, category, description, image, price, title } = item;
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
    <div className=" min-h-[450px] h-auto  bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img
          className="rounded-t-lg h-[50%] w-[100%] object-contain"
          src={image}
          alt=""
        />
      </a>
      <div className="p-5">
        <span>
          <h5 className="mb-2 text-md font-[500] tracking-tight text-gray-900  line-clamp-1">
            {title}
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-between my-2 flex-wrap">
          <span>Category: <span className="text-green-500">{category}</span></span>
          <span>Price: <span className="text-blue-600">{price}$</span></span> 
        </div>
        <div className="flex items-center justify-between mt-1 flex-wrap gap-1">
          <button
            className="btn text-sm"
            onClick={() => navigate(`/products/${id}`)}
          >
            See Details
          </button>
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
  );
};

export default ProductCard;
