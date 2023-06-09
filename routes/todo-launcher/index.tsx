import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to Todo Launcher. This app is an app that works with Todo tasks and
          is a launcher
        </p>
        {/* make a link to the privacy policy */}
        <a class="text-blue-500 hover:underline"
        href="/todo-launcher/privacy-policy">Privacy policy</a>
      </div>
    </>
  );
}
