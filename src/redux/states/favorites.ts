import { LocalStorageType } from "@/models/localStorage"
import { IPerson } from "@/models/people"
import { getLocalStorage, setLocalStorage } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"

const initialState: IPerson[] = []

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStorageType.Favorites) ? JSON.parse(getLocalStorage(LocalStorageType.Favorites) as string) as IPerson[] : initialState,
  reducers: {
    addFavorite: (_, action) => {
      setLocalStorage(LocalStorageType.Favorites, JSON.stringify(action.payload))
      return action.payload
    },
    removeFavorite: (state, action) => {
      // ESTA FORMA SE PUEDE SIMULAR LA MUTACIÓN DEL ESTADO POR EL USO DE IMMER - PERO EL ESTADO SIGUE SIENDO INMUTABLE
      const index = state.findIndex(person => person.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }

      // ESTA FORMA LA FORMA NORMAL QUE SE TRATARÍA LA INMUTABILIDAD - EL RETURN ES PARA INDICA EL NUEVO VALOR DEL STATE
      // const updatedFavorites = state.filter(p => p.id !== action.payload.id)
      // setLocalStorage(LocalStorageType.Favorites, JSON.stringify(updatedFavorites))
      // return updatedFavorites
    }
  }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions