// Esto seria el primer componente, todo el archivo App que se genera directamente con React

// Tener en cuenta que muchos atributos seguiran siendo iguales que antes como id, pero por ejemplo, class pasara a ser className (ver en consola).

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;