import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DoctorList from "./components/doctor/DoctorList";
import Consult from "./components/main/Consult";
import Approach from "./components/main/Approach";
import Footer from "./components/Footer";
import DoctorDoctor from "./components/DoctorDoctor";
import BookConsult from "./components/main/BookConsult";
import NewMain from "./components/NewMain";
import AyurvedaPage from "./components/main/AyurvedaPage";
import CustomerStories from "./components/main/CustomerStories";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DoctorDoctor/>} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/new" element={<NewMain/>} />
        <Route path="/book" element={<BookConsult/>} />
        <Route path="/discover" element={<AyurvedaPage/>} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/feedback" element={<CustomerStories/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
