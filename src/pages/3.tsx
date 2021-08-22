import React, {
  useReducer,
  Reducer,
  ChangeEventHandler,
  useState,
  FormEventHandler,
} from "react";
import { useUserState, User, UserStateProvider } from "../context/userContext";
import {
  Center,
  HStack,
  Heading,
  Box,
  FormControl,
  Input,
  FormLabel,
  Button,
  Text,
  Badge,
  VStack,
  Flex,
} from "@chakra-ui/react";

const FormUser = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    phone: "",
  } as User);
  const { state, dispatch } = useUserState();

  const handleChangue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER", payload: { user: values } });
    console.log(state);
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} bg="white" p={2}>
      <Text fontWeight="semibold">Form</Text>
      <FormControl>
        <FormLabel>name</FormLabel>
        <Input name="name" onChange={handleChangue} placeholder="name" />
      </FormControl>
      <FormControl>
        <FormLabel>LastName</FormLabel>
        <Input
          name="lastName"
          onChange={handleChangue}
          placeholder="LastName"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <Input
          type="tel"
          name="phone"
          onChange={handleChangue}
          placeholder="phone"
        />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        save
      </Button>
    </VStack>
  );
};

const ListUsers = () => {
  const { state, dispatch } = useUserState();

  const mapItem = (user: User) => {
    return (
      <Box key={user.id} as="li" display="inline-block">
        <Text fontWeight="semibold">{user.name}</Text>
        <Badge>{user.phone}</Badge>
        <Button
          mx={2}
          colorScheme="red"
          onClick={() =>
            dispatch({ type: "REMOVE_USER", payload: { id: user.id } })
          }
        >
          x
        </Button>
      </Box>
    );
  };

  return (
    <VStack minWidth="350px" as="ul" listStyleType="none" bg="white" p={2}>
      {state.users.map(mapItem)}
    </VStack>
  );
};

const Header = () => {
  const { state } = useUserState();
  return (
    <Heading textAlign="center" my={4} color="white">
      Contact list : {state.total}
    </Heading>
  );
};

function Page() {
  return (
    <UserStateProvider>
      <Header />
      <Center width="100vw" flexDirection="column" bg="blue.600" height="100vh">
        <Flex bg="white" as="div" p={4}>
          <FormUser />
          <ListUsers />
        </Flex>
      </Center>
    </UserStateProvider>
  );
}

export default Page;
