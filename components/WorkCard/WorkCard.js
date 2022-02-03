import React from "react";
import styles from "./WorkCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "/components/Button/Button";

export const WorkCard = ({
  className,
  children,
  leftImage,
  rightImage,
  ...restProps
}) => {
  return (
    <div className={styles.work_card} {...restProps}>
      {leftImage && (
        <div className={styles.work_card__left_image}>
          <Image
            className={styles.work_card__img}
            alt="Left Image"
            src={leftImage}
            width={440}
            height={330}
          />
        </div>
      )}

      <div className={styles.work_card__text}>
        <h4 className={styles.work_card__text__title}>Calculator App</h4>
        <p className={`text-base ${styles.work_card__description}`}>
          Product design and Development
        </p>
        <div className={styles.work_card__button}>
          <Link href="" passHref>
            <Button label="Live Demo" />
          </Link>
          <Link href="" passHref>
            <Button
              label="GitHub"
              leftIcon={"/images/github-black.svg"}
              width={14}
              height={14}
            />
          </Link>
        </div>
      </div>

      {rightImage && (
        <div className={styles.work_card__right_image}>
          <Image
            className={styles.work_card__img}
            alt="Right Image"
            src={rightImage}
            width={440}
            height={330}
          />
        </div>
      )}
    </div>
  );
};

export default WorkCard;
