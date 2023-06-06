import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Privacy policy</title>
        <link rel="stylesheet" href="./privacy-policy/styles.css" />
      </Head>
      <div class="mx-auto max-w-2xl p-5 text-justify">
        <h1 class="text-center">Privacy Policy</h1>
        <p>
          This privacy policy governs your use of the software application ToDo Launcher for Android mobile devices that was created by Hernando Nuñez Pinzon.
        </p>
        <h2 class="text-center">What information we collect?</h2>
        <p>
          Application does not collect personal information like name, surname, age, date of birth, etc.
          We use Google supplied APP performance tracking information to improve Application.
          This application only makes use of the sound your Android mobile phone to create the alarm.
        </p>

        <h2 class="text-center">Google Analytics</h2>
        <p>
          This Application uses Google Analytics to help us analyze how you use the app. It helps us to improve this product.
          Thanks to Google Analytics, we know how long you use the app, what kind of device you're using, where you're from,
          and a little bit more. All this is used to improve the app.
          <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" class="text-blue-500">
            Read more about Google Analytics
          </a>
        </p>

        <h2 class="text-center">Advertisement</h2>
        <p>
          Google AdMob privacy policy can be found
          <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" class="text-blue-500 ml-0.5">
            here
          </a>.
          Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website.
          Google's use of the DoubleClick cookie enables it and its partners to serve ads to your users based on their visit to
          your sites and/or other sites on the Internet.
          Users may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" class="text-blue-500">
            Ads Settings
          </a>.
          (Alternatively, you can direct users to opt out of a third-party vendor's use of cookies for interest-based advertising by
          visiting
          <a href="http://aboutads.info/" target="_blank" rel="noopener noreferrer" class="text-blue-500">
            aboutads.info
          </a>.)
        </p>

        <h2 class="text-center">Contact</h2>
        <p>
          To contact us, please use email: <a href="mailto:hnunez.informatica@gmail.com">hnunez.informatica@gmail.com</a>
        </p>
      </div>
    </>
  );
}
