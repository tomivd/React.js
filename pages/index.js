import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">designed by jermyiah</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Jeremy Escobar.
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              B.S. Computer Engineering
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                With an emphasis on Embedded Software Engineering. I have worked in a variety of IDE
                environments including Code Composer Studio, Xilinx Vivado, Linux, and many other applications. 
                I have experience creating projects from start to finish, encompassing the full life cycle. 
                Please see my portfolio below. Thank you.
             </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://twitter.com/jermyiah_" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle />
            </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
              <a href="https://github.com/jge162" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
          <h3 className="text-3xl py-1 dark:text-white text-center">Software Experience:</h3>
<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
  <span className="text-teal-500">- C/C++, OOP programming, Python, Verilog, React.js, Matlab, Linux, VHDL</span>
</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
         I am a student at CSUF, currently in my culminating semester, working towards completing my final course in Computer Engineering. My focus is on the second part of my senior design project. Throughout my academic journey, I have developed proficiency in various programming languages, such as C/C++ and am eager to apply my knowledge in a professional setting. I am actively seeking entry-level opportunities and am confident in my comprehensive understanding of computer science and electrical engineering acquired through my studies, which have encompassed subjects such as computer architecture, computer networks, embedded systems, and principles of electrical engineering, including design and digital signal processing.
   </p>
    <span className="text-teal-500"> </span>
</div>
        </section>
         <section>
          <div>
                <span className="text-teal-500 text-center"> Website created using React.js, Visual Studio Code, and Tailwind. </span>

            </div>
        </section>
      </main>
    </div>
  );
}
