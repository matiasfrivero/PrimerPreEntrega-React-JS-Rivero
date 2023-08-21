// Esto seria el primer componente, todo el archivo App que se genera directamente con React
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;