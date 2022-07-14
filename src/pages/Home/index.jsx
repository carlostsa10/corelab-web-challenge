import Footer from "../../components/Footer";
import Create from "../../components/Create";
import { VehicleProvider } from "../../context/VehicleContext";

export default function Home() {
  return (
    <VehicleProvider>
      <Create />
      <Footer />
    </VehicleProvider>
  );
}
