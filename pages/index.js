import Head from "next/head";
import styles from "../styles/Home.module.css";
import Ghost from "../components/ghost";
import Info from "../components/info";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quentin Cornevin</title>
        <meta name="description" content="Just a CV" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <Ghost />
        <h1 className={styles.title}>
          Hello I&apos;m <b>Quentin</b> 👋
        </h1>

        <p className={styles.description}>
          I&apos;m a <b>Front-end / Fullstack</b> dev, living in Paris. 🥐
        </p>

        <div className={styles.personnal}>
          <div className={styles.infoWrapper}>
            <Info className={styles.infoIcon} />
          </div>

          <h2 className={styles.experiencesTitle}>Some personal info ...</h2>

          <span>
            I&apos;m 30 years old, passionate about tech, cryptomoney, and
            economics. All my professionnal experiences were in Vue.js but I
            used React and Next.js in some of my personnal projects.{" "}
            <i>(This website right here is using Next.js)</i>
          </span>

          <span>
            I also like design, followed some online course about design. I suck
            at using Figma, but for me building a website with a good UI/UX is
            important
          </span>

          <div className={styles.contact}>
            <span>
              <b>Phone number:</b> +33674180235
            </span>
            <span>
              <b>Mail</b> qcornevin@gmail.com
            </span>
          </div>
        </div>

        <div className={styles.experiences}>
          <div className={styles.circleTop} />
          <div className={styles.separator} />
          <div className={styles.circleBottom} />

          <h2 className={styles.experiencesTitle}>Work experiences</h2>

          <div className={styles.experience}>
            <h3>
              <a
                href="https://www.routine.co/"
                target="_blank"
                rel="noreferrer"
              >
                🤖 Routine
              </a>
              <span className={styles.test}>2021-04-01</span>
            </h3>

            <span>
              Routine is a productivity app combining a todo list, a calendar to
              plan your week and a tool to takes notes{" "}
            </span>
            <span>
              I&apos;m currently working there as <b>Lead front-end engineer</b>
              The main tool is built on{" "}
              <a
                href="https://www.electronjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                Electron
              </a>{" "}
              in combination of{" "}
              <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                Vue.js
              </a>{" "}
              and{" "}
              <a href="https://ocaml.org/" target="_blank" rel="noreferrer">
                OCaml
              </a>
            </span>
            <span>
              I joined the company as the first employee, and build a big part
              of the app, with the help of 3 other devs that joined after me.
            </span>
          </div>

          <div className={styles.experience}>
            <h3>
              <a href="https://www.comet.co/" target="_blank" rel="noreferrer">
                🚀 Comet
              </a>
              <span className={styles.test}>2017-04-31 - 2020-12-14</span>
            </h3>

            <span>
              Comet is a platform that put tech freelancer in relation with big
              companies. Our goal, was to create an healthier model that use
              technology to put freelancer and company in relation.
            </span>

            <span>
              I was working there as a <b>Full-stack engineer</b>, we were using{" "}
              <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                Vue.js
              </a>{" "}
              for the front-end,{" "}
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                Node.js
              </a>{" "}
              for the backend and{" "}
              <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                Graphql
              </a>{" "}
              for the API
            </span>
          </div>

          <div className={styles.experience}>
            <h3>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                🤮 Accenture
              </a>
              <span className={styles.test}>2016-04-01 - 2017-04-15</span>
            </h3>

            <span>
              Accenture was my first experience after engineering school (rookie
              mistake). The experience was globaly bad, I worked as a consultant
              for the company{" "}
              <a href="https://amadeus.com/fr" target="_blank" rel="noreferrer">
                Amadeus
              </a>{" "}
              as a <b>Full-stack engineer</b>
            </span>

            <span>
              I was mainly working in{" "}
              <a
                href="https://www.javatpoint.com/java-ee"
                target="_blank"
                rel="noreferrer"
              >
                JEE
              </a>
              ,{" "}
              <a
                href="https://www.jmdoudoux.fr/java/dej/chap-jsp.htm"
                target="_blank"
                rel="noreferrer"
              >
                JSP
              </a>{" "}
              and other old things like that ...
            </span>
          </div>

          <div className={styles.experience}>
            <h3>
              🏢 Hewlett Packard (aka HP)
              <span className={styles.test}>2015-07-01 - 2016-04-01</span>
            </h3>

            <span>
              I did my internship as a <b>Front-end engineer</b>. I mainly used
              the now regretted{" "}
              <a href="https://angularjs.org/" target="_blank" rel="noreferrer">
                Angular.js
              </a>{" "}
              and{" "}
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                Node.js
              </a>
            </span>

            <span>
              It was a good first job, but working in a big company was not
              really my thing.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
