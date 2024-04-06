import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VirtualTryOnComponent from "./components/getdemo/demo";
import About from "./Sections/About";
import Library from "./Sections/Library";
import Contact from "./Sections/Contact";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));
const Login = lazy(() => import("./components/LoginPage/login"));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path ="/getdemo" element={<VirtualTryOnComponent/>} />
          <Route path="/about" element={<About />}/>
          <Route path="/library" element={<Library />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path ="/" element={<Home/>} />
        </Routes>
        {/* Other routes */}
        {/* <Home /> */}
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
