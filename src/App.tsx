import Home from "./pages/Home.tsx";
import ServicesTabs from "./components/common/ServicesTabs.tsx";
import Footer from "./components/common/Footer.tsx";

function App() {
  return (
    <div className="">
      <Home/>
      <ServicesTabs />
      <Footer/>
    </div>
  );
}

export default App;
