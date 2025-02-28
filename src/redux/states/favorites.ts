import { LocalStorageType } from "@/models/localStorage"
import { IPerson } from "@/models/people"
import { getLocalStorage, setLocalStorage } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"

const initialState: IPerson[] = []

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStorageType.Favorites) ? JSON.parse(getLocalStorage(LocalStorageType.Favorites) as string) : initialState,
  reducers: {
    addFavorite: (_, action) => {
      setLocalStorage(LocalStorageType.Favorites, JSON.stringify(action.payload))
      return action.payload
    }
  }
})

export const { addFavorite } = favoriteSlice.actions