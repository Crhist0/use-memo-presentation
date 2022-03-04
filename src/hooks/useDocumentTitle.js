import { useRef, useEffect } from "react";

/**
 * useDocumentTitle.
 *
 * @hooks
=============*/

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title ? title.charAt(0).toUpperCase() + title.slice(1) : "React App";
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [prevailOnUnmount]
  );
}

export default useDocumentTitle;
