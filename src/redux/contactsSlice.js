import { createSlice, nanoid } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// const contactsInitialState = [
//   { id: 0, name: 'Fedor', number: '13456' },
//   { id: 1, name: 'Alexandra', number: '13456' },
//   { id: 2, name: 'John', number: '1234567' },
//   { id: 3, name: 'Alex', number: '1234567' },
//   { id: 4, name: 'Mango', number: '1234567' },
// ];


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {contacts:[]},
  reducers: {

    addContact: {
      reducer(state, action) {   state.contacts = [...state.contacts, action.payload]
      },
      prepare(name,number) {
        return {
          payload: {
            name,
            id: nanoid(),
            number,
          },
        };
      },
    },
      deleteContact(state, action) {
        state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['contacts'],
};


export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer =  contactsSlice.reducer ;
export const contactsReducer =  persistReducer(persistConfig,contactsSlice.reducer) ;
