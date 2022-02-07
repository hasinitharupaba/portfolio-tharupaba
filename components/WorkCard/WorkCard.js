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
  heading,
  gitHubLink,
  demoLink,
  description,
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
            width="440px"
            height="330px"
          />
        </div>
      )}

      <div className={styles.work_card__text}>
        <h5 className={styles.work_card__text__title}>{heading}</h5>

        {description && (
          <p className={`text-base ${styles.work_card__description}`}>
            {description}
          </p>
        )}

        <div className={styles.work_card__button}>
          <Link href={demoLink || ""} passHref>
            <a target="_blank" rel="noreferrer">
              <Button label="Live Demo" />
            </a>
          </Link>
          <Link href={gitHubLink || ""} passHref>
            <a target="_blank" rel="noreferrer">
              <Button
                label="GitHub"
                leftIcon={"/github-black.svg"}
                width={14}
                height={14}
              />
            </a>
          </Link>
        </div>
      </div>

      {rightImage && (
        <div className={styles.work_card__right_image}>
          <Image
            className={styles.work_card__img}
            alt="Right Image"
            src={rightImage}
            width="440px"
            height="330px"
          />
        </div>
      )}
    </div>
  );
};

export default WorkCard;
