import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import ArticlePage from "./ArticlePage";
// import FinancePage from "./FinancePage";
// import Finance from "./Finance";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <div>
        <NavigationBar />
        <div
          className=" noto-serif  mx-auto mt-28 lg:mt-20  px-2"
          id="container"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/finance" element={<Finance />} /> */}
            <Route path="/article/:id" element={<ArticlePage />} />
            {/* <Route path="/finance/:id" element={<FinancePage />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
