import Head from "next/head";
import Link from "next/link";

const profiles = ["Ahmed", "mohamed", "Omar", "Ali"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>home Page</h2>
        <Link href="/about">About Page</Link>
        <br />
        <span>Go to one of these profile</span>
        <ul>
          {profiles.map((profile) => (
            <li key={profile}>
              <Link href={`/users/${profile}`}>{profile}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
