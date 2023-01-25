import { createSlice } from '@reduxjs/toolkit';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsInitialState = [
//   { id: 0, name: 'Fedor', number: '13456' },
//   { id: 1, name: 'Alexandra', number: '13456' },
//   { id: 2, name: 'John', number: '1234567' },
//   { id: 3, name: 'Alex', number: '1234567' },
//   { id: 4, name: 'Mango', number: '1234567' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },

    deleteContact(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   // whitelist: ['contacts'],
// };

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts;

export const contactsReducer = contactsSlice.reducer;
