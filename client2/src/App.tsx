import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './Adminastor/pages/Dashbord';
import Store from './pages/Store';
import AccountSettings from './pages/AccountSettings';
import MyStore from './pages/MyStore';
import Messager from './pages/Messager';
import CreateStore from './pages/CreateStore';
import GeneraleShop from './pages/GeneraleShop';
import Analytics from './Adminastor/pages/Analytics';
import Stores from './Adminastor/pages/Stores';
function App() {

  return (
    <>


    <Routes>

  <Route path='/' element={<Home   />} />
  <Route path='/auth' element={<Login   />} />
  <Route path='/admin' element={<Dashboard />} />
  <Route path='/store' element={<Store />} />
  <Route path='/Account Settings' element={<AccountSettings />} />
<Route path='/My Store' element = {<MyStore/>} />
<Route path='/Messages' element = {<Messager/>} />
<Route path='/CreateStore' element = {<CreateStore/>} />
<Route path='/shop' element = {<GeneraleShop/>} />
<Route path='/Analytics' element = {<Analytics/>} />
<Route path='/stores' element = {<Stores/>} />



 


      
    </Routes>

 
    </>
  )
}

export default App
