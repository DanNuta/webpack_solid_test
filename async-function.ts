import axios from "axios";

export const fetchPost = async () => {
  const { data } = await axios.get(
    "https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts"
  );
  return data;
};
