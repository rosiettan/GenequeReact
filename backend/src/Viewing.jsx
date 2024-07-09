import React from 'react';
import Header from "../public/js/header";
import Footer from "../public/js/footer";


function Main() {
  return (
    <main>
      <p>Основное содержимое вашего сайта.</p>
    </main>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
