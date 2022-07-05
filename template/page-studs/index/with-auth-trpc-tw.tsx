import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthShowcase: React.FC = () => {
  const { data: secretMessage, isLoading } = trpc.useQuery([
    "auth.getSecretMessage",
  ]);

  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        className="px-4 py-2 border-2 border-blue-500 rounded-md"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h2>
        <p className="text-2xl text-gray-700">This stack uses</p>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-rows-2 md:grid-rows-2 justify-center items-center lg:grid-cols-3 md:grid-cols-3 gap-3 mt-3 pt-3 w-full lg:w-2/3 md:w-full">
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">NextJS</h2>
            <p className="text-sm text-gray-600">
              The react framework for production
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">TypeScript</h2>
            <p className="text-sm text-gray-600">
              Strongly typed programming language that builds on JavaScript,
              giving you better tooling at any scale
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">TailwindCSS</h2>
            <p className="text-sm text-gray-600">
              Rapidly build modern websites without ever leaving your HTML
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">tRPC</h2>
            <p className="text-sm text-gray-600">
              End-to-end typesafe APIs made easy
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://trpc.io/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">Next-Auth</h2>
            <p className="text-sm text-gray-600">Authentication for Next.js</p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://trpc.io/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
            <h2 className="text-lg text-gray-700">Prisma</h2>
            <p className="text-sm text-gray-600">
              Build data-driven JavaScript & TypeScript apps in less time
            </p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
              href="https://www.prisma.io/docs/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
