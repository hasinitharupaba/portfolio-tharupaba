import React, { useRef, useEffect } from "react";
import styles from "./Cursor.module.scss";

export const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const node = cursorRef.current;
    let timeout;

    function mouseCursorFn(e, currentNode) {
      let x = e.pageX;
      let y = e.pageY;

      currentNode.style.top = y + 16 + "px";
      currentNode.style.left = x + 2 + "px";
      currentNode.style.display = "block";

      function mouseStopped() {
        currentNode.style.display = "none";
      }

      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    }

    document.addEventListener("mousemove", (e) => mouseCursorFn(e, node));

    document.addEventListener("mouseout", (e) => {
      node.style.display = "none";
    });
  }, [cursorRef]);

  return <div className={styles["cursor"]} ref={cursorRef} />;
};

export default Cursor;
