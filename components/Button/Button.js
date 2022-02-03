import React from "react";
import styles from "./Button.module.scss";
import Image from "next/image";

export const Button = ({
  className,
  children,
  label,
  leftIcon,
  rightIcon,
  width,
  height,
  ...restProps
}) => {
  return (
    <button type="button" className={styles.button} {...restProps}>
      {leftIcon && (
        <span className={styles.button__left_icon}>
          <Image
            className={styles.button__arrow}
            alt="Left icon"
            src={leftIcon}
            width={width}
            height={height}
          />
        </span>
      )}

      {label}

      {rightIcon && (
        <span className={styles.button__right_icon}>
          <Image
            className={styles.button__arrow}
            alt="Right icon"
            src={rightIcon}
            width={15}
            height={8}
          />
        </span>
      )}
    </button>
  );
};

export default Button;
