import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../redux/actions/productsAction";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { isLoading, products, error, isLoadingPost, isLoadingDelete } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch, isLoadingPost, isLoadingDelete]);

  // make a function to handle delete a product
  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct({ productId }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-[90%] md:w-[80%] lg:w-[50%] my-5">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-gray-100 w-full rounded-sm shadow-md p-5 my-2 transition-all duration-100 hover:shadow-lg"
        >
          <h2 className="text-black text-2xl font-bold my-2">
            <span className="text-blue-500 font-bold">Product ID: </span>
            <span
              className={
                product.completed ? "line-through decoration-green-500" : "none"
              }
            >
              {product.productId}
            </span>
          </h2>

          <p className="text-black text-lg font-normal text-justify my-2">
            <span className="text-blue-500 font-bold">Name: </span>
            {product.name}
          </p>
          <p className="text-black text-lg font-normal text-justify my-2">
            <span className="text-blue-500 font-bold">Price: </span>
            {product.price}
          </p>
          <p className="text-black text-lg font-normal text-justify my-2">
            <span className="text-blue-500 font-bold">Featured: </span>
            {product.featured+""}
          </p>
          <p className="text-black text-lg font-normal text-justify my-2">
            <span className="text-blue-500 font-bold">Rating: </span>
            {product.rating.$numberDecimal}
          </p>
          <p className="text-black text-lg font-normal text-justify my-2">
            <span className="text-blue-500 font-bold">Created At: </span>
            {product.createdAt}
          </p>
          <p className="text-black text-lg font-normal text-justify my-2">
            <span className="text-blue-500 font-bold">Company: </span>
            {product.company}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
