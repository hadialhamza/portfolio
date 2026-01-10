import { Toaster } from "sonner";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  return (
    <div>
      <Toaster position="top-center" richColors />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
