import * as React from "react";
import { Reducer } from "react";
import { Center, Box, Button, VStack, Text, HStack } from "@chakra-ui/react";

type Action<T extends string, payload> = payload extends undefined
  ? {
      type: T;
    }
  : {
      type: T;
      payload: payload;
    };

const initialState = { count: 0 };

type State = typeof initialState;

type Actions =
  | Action<"increment", undefined>
  | Action<"decrement", undefined>
  | Action<"reset", undefined>
  | Action<"incrementByAmount", { val: number }>;

const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "incrementByAmount":
      return { count: state.count + action.payload.val };
  }
};

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <VStack bg="white" p={2}>
      <Text fontSize="md" as="h1" fontWeight="bold">
        Count: {state.count}
      </Text>
      <HStack>
        <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
        <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
        <Button onClick={() => dispatch({ type: "reset" })}>reset</Button>
        <Button
          onClick={() =>
            dispatch({ type: "incrementByAmount", payload: { val: 2 } })
          }
        >
          reset
        </Button>
      </HStack>
    </VStack>
  );
}

function Page() {
  return (
    <Center width="100vw" bg="blue.600" height="100vh">
      <Counter />
    </Center>
  );
}

export default Page;
