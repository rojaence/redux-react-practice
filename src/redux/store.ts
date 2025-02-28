import { IPerson } from "@/models/people";
import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, peopleSlice } from "./states";

export interface AppStore {
  people: IPerson[],
  favorites: IPerson[]
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoriteSlice.reducer 
  }
})