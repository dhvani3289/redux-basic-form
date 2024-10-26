import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import ViewContact from './pages/ViewContact.jsx'
import UpdateContact from './pages/UpdateContact.jsx'

function App() {

  return (
    <>

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Contact />} />
            <Route path='/viewContact' element={<ViewContact />} />
            <Route path='/updateContact/:index' element={<UpdateContact />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
