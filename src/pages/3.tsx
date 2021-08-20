import * as React from "react";
import {
  useState,
  useEffect,
  useCallback,
  memo,
  ChangeEventHandler,
} from "react";
import { Button, Box, Text, Flex, Input } from "@chakra-ui/react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = (terms: string) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((t) => t.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [terms]);

  return posts;
};

const MyPostsList = ({
  term,
  onCLickItem,
}: {
  term: string;
  onCLickItem: (id: number) => void;
}) => {
  const posts = usePosts(term);

  useEffect(() => {
    console.log("post list render");
  });

  const item = (item: Post) => {
    console.log("item render");

    return (
      <Box
        key={item.id}
        maxWidth="250px"
        shadow="lg"
        textAlign="center"
        padding={4}
      >
        {term}
        <Text fontWeight="bold">{item.title}</Text>
        <Button my={4} onClick={() => onCLickItem(item.id)}>
          On Click
        </Button>
      </Box>
    );
  };

  return <Box>{posts.map(item)}</Box>;
};

const PostListMemoized = memo(MyPostsList);
function index() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const onClickItem = useCallback((title: number) => {
    console.log("clicked in title", title);
  }, []);

  useEffect(() => {
    console.log("render  parent");
  });
  const chanqueQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;

    setQuery(val);
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
        onChange={chanqueQuery}
        placeholder="Query for search"
        maxWidth="250px"
      />
      <PostListMemoized term={query} onCLickItem={onClickItem} />
    </Flex>
  );
}

export default index;
