import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './components/User'
import UpdateUser from './components/UpdateUser'
import CreateUser from './components/CreateUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<User/>}></Route>
            <Route path='/Create' element={<CreateUser/>}></Route>
            <Route path='/Update/:id' element={<UpdateUser/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
