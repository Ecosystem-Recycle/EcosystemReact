//Importar React
import React from 'react'
import ReactDOM from 'react-dom/client'
//Importar React/React-Dom/React-Router
import { Route, Routes, BrowserRouter } from 'react-router-dom'
//Importar Componentes
import Header from './components/Header'
import Footer from './components/Footer'
//Importar CSS
import './index.css'
//Importar Pages
import ColetasAgendadas from './pages/ColetasAgendadas'
// import ColetasFinalizadas from './components/ColetasFinalizadas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <Routes>
      {/* <Route path='/' element={ <Home /> } /> */}
        {/* <Route path='/contato' element={ <AgendarColeta /> } />  */}
        <Route path='coletasagendadas' element={ <ColetasAgendadas/> }/>
        {/* <Route path='coletasfinalizadas' element={ <ColetasFinalizadas/> }/> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)