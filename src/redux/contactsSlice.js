import { createSlice, nanoid } from "@reduxjs/toolkit";


const contactsInitialState = [
  { id: 0, name: 'Fedor', number: '13456' },
  { id: 1, name: 'Alexandra', number: '13456' },
  { id: 2, name: 'John', number: '1234567' },
  { id: 3, name: 'Alex', number: '1234567' },
  { id: 4, name: 'Mango', number: '1234567' },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {

    addContact: {
      reducer(state, action) {
        return [...state, action.payload]
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

    deleteContact(state, action) {return state.filter(task => task.id !== action.payload)
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;