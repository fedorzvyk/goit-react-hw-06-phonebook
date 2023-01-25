import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box } from '../commonStyles/Box';

export default function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={5}
      maxWidth="500px"
      my={5}
      mx="auto"
      py={6}
      px={4}
      bg="muted"
      border="normal"
      borderRadius="normal"
      as="main"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        as="section"
      >
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        as="section"
      >
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
}
