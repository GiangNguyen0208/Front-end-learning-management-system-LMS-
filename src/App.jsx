import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomeScreen from './view/client/pages/home';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          <Route element={<HomeScreen/>} path='/'/>
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  )
}

export default App
