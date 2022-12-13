import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* APP HEADING / TITLE */}
        <h1 className="my-5 text-4xl font-bold text-black">Products View</h1>

        <AddProduct />

        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
