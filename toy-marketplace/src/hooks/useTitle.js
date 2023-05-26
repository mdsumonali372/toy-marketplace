import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Animal Toys`;
  }, [title]);
};

export default useTitle;
