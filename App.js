// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import "./App.css";
import Header from "./zookiNavbar";
import Banner from "./zookiBanner";
import AboutUs from "./zookiAboutUs";
import Performance from "./zookiPerformance";
import Services from "./zookiServices";
import Features from "./zookiFeatures";
import Strategy from "./strategySolutions";
import Marketing from "./marketingBusiness";
import Pricing from "./ourPricing";
// import ourClients from "./zookiClients";
import Blogs from "./zookiBlogs";
import Testimony from "./ourTestimony";
import Forms from "./zookiForm";
import Footer from "./zookiFooter";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Performance></Performance>
      <Services></Services>
      <Features></Features>
      <Strategy></Strategy>
      <Marketing></Marketing>
      <Pricing></Pricing>
      <Testimony></Testimony>
      <Blogs></Blogs>
      <Forms></Forms>
      <Footer></Footer>
    </div>
  );
}

export default App;
