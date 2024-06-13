import Slider from "../components/Slider";
import product from "../data/product"
import Catalogue from "../components/Catalogue";

const Home = () => {
  return (
      <>
        <Slider start={product.start} />
        <Catalogue catalogue={product.catalogue}/>
      </>
    )
    }

export default Home;
