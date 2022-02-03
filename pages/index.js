import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { Instagram } from "/icons/Instagram";
import { Github } from "/icons/Github";
import { Linkedin } from "/icons/Linkedin";
import Cursor from "../components/Cursor/Cursor";
import WorkCard from "../components/WorkCard/WorkCard";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/siteicon.png" />

        <title>Hasini Tharupaba</title>
        <meta name="title" content="Hasini Tharupaba" />
        <meta
          name="description"
          content="Passionated front-end engineer from Sri Lanka who made a career shift from Demography to programming. Specialises in UI engineering technologies. "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tharupaba.com/" />
        <meta property="og:title" content="Hasini Tharupaba" />
        <meta
          property="og:description"
          content="Passionated front-end engineer from Sri Lanka who made a career shift from Demography to programming. Specialises in UI engineering technologies. "
        />
        <meta
          property="og:image"
          content="https://tharupaba.com/og-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tharupaba.com/" />
        <meta property="twitter:title" content="Hasini Tharupaba" />
        <meta
          property="twitter:description"
          content="Passionated front-end engineer from Sri Lanka who made a career shift from Demography to programming. Specialises in UI engineering technologies. "
        />
        <meta
          property="twitter:image"
          content="https://tharupaba.com/og-image.png"
        ></meta>
      </Head>

      <Cursor />

      <main className={styles.main}>
        <div className={`container ${styles.topic}`}>
          <div className={styles.topic__section}>
            <h1 className={`h1 ${styles.topic__main_title}`}>Hey! I am</h1>
            <h1 className={`h1 ${styles.topic__colored_title}`}>
              Hasini Tharupaba
            </h1>

            <p className={`text-base ${styles.topic__description}`}>
              Passionated front-end engineer from Sri Lanka who made a career
              shift from Demography to programming. I am specialised in UI
              engineering technologies such as JavaScript, SASS, and
              Tailwindcss. <br />I turn coffee into code{" "}
              <a
                href="https://www.instagram.com/karapincha.dev/"
                target="_blank"
                rel="noreferrer"
              >
                @Karapincha Studio
              </a>
            </p>
          </div>

          <div>
            <ul className={styles.socials}>
              <li className={styles.socials__list}>
                <Link href="https://www.instagram.com/pabacodes/">
                  <a
                    className={`${styles.socials__list__link} social-icon`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className={styles.socials__list__link__icon} />
                  </a>
                </Link>
              </li>

              <li className={styles.socials__list}>
                <Link href="https://github.com/hasinitharupaba">
                  <a
                    className={`${styles.socials__list__link} social-icon`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </Link>
              </li>

              <li className={styles.socials__list}>
                <Link href="https://www.linkedin.com/in/hasini-tharupaba/">
                  <a
                    className={`${styles.socials__list__link} social-icon`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.green_background}>
          <h2 className={`h2 ${styles.green_background__heading}`}>
            Things I love
          </h2>
          <div>
            <section className={styles.tech_cards}>
              <div className={styles.tech_card}>
                <Image
                  alt="HTML"
                  className={styles.tech_card__img}
                  src="/html.svg"
                  height={80}
                  width={80}
                />
                <h4 className={`h5 ${styles.tech_card__heading}`}>Frontend</h4>
                <p className={`text-base ${styles.tech_card__description}`}>
                  I’m more focused on Frontend and love to work with ReactJs,
                  HTML, CSS
                </p>
              </div>

              <div className={styles.tech_card}>
                <Image
                  alt="JS"
                  className={styles.tech_card__img}
                  src="/js.svg"
                  height={80}
                  width={80}
                />
                <h4 className={`h5 ${styles.tech_card__heading}`}>
                  Project Planning
                </h4>
                <p className={`text-base ${styles.tech_card__description}`}>
                  Passionated in planning projects from scratch through designs
                  to development.
                </p>
              </div>

              <div className={styles.tech_card}>
                <Image
                  alt="Design"
                  className={styles.tech_card__img}
                  src="/design.svg"
                  height={80}
                  width={80}
                />
                <h4 className={`h5 ${styles.tech_card__heading}`}>Design</h4>
                <p className={`text-base ${styles.tech_card__description}`}>
                  I love designing the aesthetic shell of a website.{" "}
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className={`${styles.fun_projects}`}>
          <h2 className={`h2 ${styles.fun_projects__heading}`}>Fun Projects</h2>

          <div className={styles.fun_projects__card}>
            <WorkCard
              leftImage="/cursor-image.png"
              heading="Firefly Cursor"
              gitHubLink="https://github.com/hasinitharupaba/cursor-firefly"
              demoLink="https://cursor-firefly.vercel.app/"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className="text-base">
          <a href="mailto:hasinitharupaba@gmail.com">
            hasinitharupaba@gmail.com
          </a>
        </p>
        <p className="text-base"> © 2021 Hasini Tharupaba</p>
      </footer>
    </div>
  );
}
