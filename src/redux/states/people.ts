import { LocalStorageType } from "@/models/localStorage"
import { IPerson } from "@/models/people"
import { getLocalStorage, setLocalStorage } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"

const initialState: IPerson[] = []

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage(LocalStorageType.People) ? JSON.parse(getLocalStorage(LocalStorageType.People) as string) : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageType.People, JSON.stringify(state))
      return action.payload
    }
  }
})

export const { addPeople } = peopleSlice.actions