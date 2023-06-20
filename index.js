import Header from "./Header";
import Footer from "./Footer";
import Notes1 from "./Notes1";
import Notes2 from "./Notes2";
import Notes3 from "./Notes3";
import Notes4 from "./Notes4";
import Notes5 from "./Notes5";

const react = require("react");
const reactDom = require("react-dom");

reactDom.render(
  <div>
    <Header />
    <Notes1 />
    <Notes2 />
    <Notes4 />
    <Notes3 />
    <Notes5 />
    <Footer />
  </div>,
  document.getElementById("root")
);
