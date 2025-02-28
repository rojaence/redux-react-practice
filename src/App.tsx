import { Provider } from 'react-redux'
import './App.css'
import { Navbar } from './components'
import { Home } from './pages/Home'
import store from './redux/store'
import CustomDialog from './components/CustomDialog/CustomDialog'
import useDialog from './hooks/useDialog'
import FavoritesTable from './pages/Home/components/FavoritesTable'

function App() {

  const favoritesDialog = useDialog()

  return (
    <Provider store={store}>
      <Navbar onFavoritesClick={favoritesDialog.show}/>
      <main>
        <Home />
        <CustomDialog open={favoritesDialog.open} hide={favoritesDialog.hide} maxWidth="md" fullWidth title='Favoritos'>
          <FavoritesTable />
        </CustomDialog>
      </main>
    </Provider>
  )
}

export default App
