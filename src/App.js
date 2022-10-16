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
      className="m-0 grayscale-[45%]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="h-full">
        <Navbar />
        <div className="h-full">{component}</div>
      </main>
    </div>
  );
}

export default App;
