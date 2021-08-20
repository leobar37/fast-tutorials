import { Button, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";

const factorial = (n: number): number => {
  console.log("call factorial");

  return n <= 0 ? 1 : n * factorial(n - 1);
};

function index() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState(0);

  const resultFactorial = useMemo(() => factorial(query), [query]);

  useEffect(() => {
    console.log("re render  pattern");
  });
  const chanqueValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    setQuery(Number(val));
  };

  return (
    <Flex
      width="100vw"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Button my={2} onClick={() => setCount(count + 1)}>
        re render
      </Button>
      <Input
        value={query}
        onChange={chanqueValue}
        placeholder="Query for search"
        maxWidth="250px"
      />
      <Text fontWeight="bold" fontSize="lg">
        factorial of {query} = {resultFactorial}{" "}
      </Text>
    </Flex>
  );
}

export default index;
