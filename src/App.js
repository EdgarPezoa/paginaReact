import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Paginas
import { Home } from './pages/Home';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import { NotFound } from './pages/NotFound';

//Componentes
import { Header } from './components/Header';
import { Footer } from './components/Footer';

//Librerias


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/nosotros" component={ Nosotros } />
        <Route path="/contacto" component={ Contacto } />
        <Route component={ NotFound } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
