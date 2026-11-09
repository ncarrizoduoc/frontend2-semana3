import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import NuestrasTiendas from './pages/NuestrasTiendas'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import { Routes, Route } from 'react-router'
import './App.css'
import NuevoArticulo from './pages/NuevoArticulo'
import MarketProvider from './context/MarketProvider'
import Inventario from './pages/Inventario'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import DetalleProducto from './pages/DetalleProducto'

function App() {

  return (
    <MarketProvider>
      <div className='flex min-h-screen flex-col'>
        <Navbar />
        
        <main className='flex-1 bg-gray-200'>
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/nuestras-tiendas' element={<NuestrasTiendas />}/>
            <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />}/>
            <Route path='/inventario' element={<Inventario />}/>
            <Route path='/nuevo-articulo' element={<NuevoArticulo />}/>
            <Route path='/productos' element={<Productos />}/>
            <Route path='/productos/:id' element={<DetalleProducto />}/>
            <Route path='/carrito' element={<Carrito />}/>
          </Routes>
        </main>
        
        <Footer />
      </div>
    </MarketProvider>
  )
}

export default App
