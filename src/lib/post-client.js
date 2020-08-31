import client from "./client";

async function createPost(payload) {
  return await client("posts", { body: payload });
}

export { createPost };
