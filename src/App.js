import image from "./assets/Ranch.jpg";
import Navbar from "./components/Navbar";
import Ranch from "./pages/Ranch";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/ranch":
      component = <Ranch />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    case "/gallery":
      component = <Gallery />;
      break;
    default:
      break;
  }
  return (
    <div
      className="m-0 w-full h-full grayscale-[45%]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <main className="h-full">
        <Navbar />
        <div className="h-4/5">{component}</div>
      </main>
    </div>
  );
}

export default App;
