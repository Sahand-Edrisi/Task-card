import { Card } from "flowbite-react";
import bgImage from "../image/hal-gatewood-Pr578ZCufII-unsplash.jpg"
function Product({ product }) {
  return (
    <>
      <div className="cardContainer ">
      <Card className="max-w-sm p-3 h-[550px] w-[400px]">
        <img src={bgImage} alt="" className="w-[350px] h-[300px] object-cover " />
        <p className="text-[19px] font-bold tracking-tight text-right text-gray-600 dark:text-white">
          {product.nameFa}
        </p>
        <p className="text-[19px] font-bold tracking-tight text-right text-gray-600 dark:text-white">
          <span> رنگ :</span>{" "}
          {product.color[0] ? product.color[0].color : undefined}
        </p>
        <span className="text-[28px] text-right h-4 font-bold text-gray-500 dark:text-white ">
          <span> قیمت : </span>
          {product.price}
        </span>
        <div className="flex items-center justify-between ">
          <div className="flex ">
            <span className="text-[28px] font-bold text-green-400 dark:text-white pr-[5px]">
              {product.MonetaryUnit}
            </span>
          </div>
          <span className="text-[20px] bg-red-500 px-2 ml-[20px] text-gray-300 font-bold rounded-xl">
            {product.DiscountPercentage}
          </span>
        </div>
      </Card>
      </div>
    </>
  );
}

export default Product;
