import './assets/scss/styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
