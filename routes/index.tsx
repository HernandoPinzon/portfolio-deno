import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="./css/styles.css" />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Welcome to my portfolio. My nane is Hernando Nuñez Pinzon and i will show you the
          projects that i have work on.
        </p>
        <h2 class="project-title">My Projects</h2>
        <ul class="project-list">
          <li class="project-item">
            <a href="/todo-launcher" class="project-link">TODO_LAUNCHER</a>
            - A powerful task management app that helps you get things done.
          </li>
          <li class="project-item">
            <a href="#" class="project-link">Project 2</a>
            - Description of Project 2.
          </li>
          <li className="project-item">
            <a href="#" className="project-link">Project 3</a>
            - Description of Project 3.
          </li>
        </ul>
      </div>
    </>
  );
}

const styles = {
  projectTitleStyles: `
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
  `,
  projectListStyles: `
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  projectItemStyles: `
    margin-top: 1rem;
    font-size: 1.2rem;
    text-align: center;
  `,
  projectLinkStyles: `
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  `,
  projectLinkHoverStyles: `
    text-decoration: underline;
  `,
};
