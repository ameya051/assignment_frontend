import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/actions/productsAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { isLoadingPost, successPost, errorPost } = useSelector(
    (state) => state.products
  );
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState("");
  const [rating, setRating] = useState("");
  const [company, setCompany] = useState("");
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // form validation check and set error message
    if (productId.length === 0) {
      setValidationError("productId filed is required");
    } else if (name.length === 0) {
      setValidationError("Name filed is required");
    } else if (price.length === 0) {
      setValidationError("Price filed is required");
    } else if (featured.length === 0) {
      setValidationError("Featured filed is required");
    } else if (rating.length === 0) {
      setValidationError("Rating filed is required");
    } else if (company.length === 0) {
      setValidationError("Company filed is required");
    }

    // if validation is ok, then add new todo
    if (productId && name && price && featured && rating && company) {
      setProductId("");
      setName("");
      setPrice("");
      setFeatured("");
      setRating("");
      setCompany("");
      setValidationError("");

      // add new Product to the list
      dispatch(createProduct({ productId, name, price, featured, rating, company }));
    }
  };

  useEffect(() => {
    if (successPost) {
      setSuccessMessage(successPost.message);
    } else if (errorPost) {
      setValidationError("Error: " + errorPost.message);
    }
  }, [successPost, errorPost]);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
      setValidationError("");
    }, 3000);
  }, [successMessage, validationError]);

  return (
    <div className="bg-gray-100 w-[90%] md:w-[80%] lg:w-[50%] p-5 rounded-sm shadow-md">
      {/* Form Validation Message */}
      {validationError && (
        <div className="w-full h-[40px] bg-red-500 text-center py-2 rounded-sm">
          <p className="text-white text-md">{validationError}</p>
        </div>
      )}

      {/* Form Success Message */}
      {successMessage && (
        <div className="w-full h-[40px] bg-green-500 text-center py-2 rounded-sm">
          <p className="text-white text-md">{successMessage}</p>
        </div>
      )}
      {/* form to add product */}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
          placeholder="Add here product Id"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
          placeholder="Add here product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
          placeholder="Add here product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
        >
          <option value="" selected disabled hidden>Add here featured</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <input
          type="number"
          className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
          placeholder="Add here product rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
          placeholder="Add here product company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-sm shadow-md w-full my-2 py-2 transition-all duration-100 hover:bg-blue-600"
        >
          {isLoadingPost ? "Adding ... !!!" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
