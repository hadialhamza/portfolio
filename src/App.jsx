import { Toaster } from "sonner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

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
