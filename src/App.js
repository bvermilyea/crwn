import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom'

import Spinner from './components/spinner/spinner.components';
import { checkUserSession } from './store/user/user.action';
import Authentication from './routes/authentication/authentication.component'

const Home = lazy(() => import('./routes/home/home.component'))
const Shop = lazy(() => import('./routes/shop/shop.components'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home /> } />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
