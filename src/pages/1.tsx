import React from "react";

function Page() {
  const array1 = ["EAT", "RUN"];
  const sum = array1.reduce(
    (prev, curr) => {
      switch (curr) {
        case "EAT": {
          return {
            text: "comer",
          };
        }
        case "RUN": {
          return {
            text: "correr",
          };
        }
        case "FIGHT": {
          return {
            text: "pelear",
          };
        }
      }

      return prev;
    },
    { text: "initial" }
  );
  const reducer = (state, action) => {

  };

  return <div>{JSON.stringify(sum)}</div>;
}

export default Page;
