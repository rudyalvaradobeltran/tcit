import { Container } from "@mui/material";
import Posts from "../../organisms/Posts";

const PostsTemplate = () => {
  return (
    <>
      <Container maxWidth="md">
        <Posts />
      </Container>
    </>
  );
};

export default PostsTemplate;
