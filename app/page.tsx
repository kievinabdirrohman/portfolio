"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <>
      <nav className="navbar bg-base-100 fixed w-full z-50 bg-gray-800 text-white text-lg">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              SiKepin
            </Link>
          </div>
          <div className="hidden md:flex md:flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="#profile-section" onClick={handleScroll}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience-section" onClick={handleScroll}>
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#project-section" onClick={handleScroll}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        className="hero min-h-screen bg-gray-900 text-white"
        id="profile-section"
      >
        <div className="hero-content">
          <div className="max-w-full">
            <div className="chat chat-start">
              <div className="chat-image avatar hidden md:block">
                <div className="w-32 rounded-full ring ring-rose-900 ring-offset-base-100 ring-offset-2">
                  <Image
                    src="/cropimage1940.webp"
                    alt="Profile"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="chat-header text-lg">Kievin Abdirrohman</div>
              <div className="chat-bubble bg-gray-700 my-2 p-7 text-xl text-white">
                Yo, wassup! I&apos;m Kievin (pronounced as Kevin). I&apos;ve
                been a professional Software Developer since 2019, and
                currently, I&apos;m focusing on Website and Mobile App
                Technology. I&apos;ve contributed to several companies and
                government agencies to help achieve their goals.
              </div>
              <div className="chat-footer opacity-50 text-lg">
                Software Developer
              </div>
            </div>
            <div className="flex space-x-5 mt-5">
              <Link href="mailto:kievin.abdrohman@gmail.com">
                <Image
                  src="email-mail-svgrepo-com.svg"
                  alt="Email"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/kievin-abdirrohman/">
                <Image
                  src="linkedin-linked-in-svgrepo-com.svg"
                  alt="Linkedin"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://github.com/kievinabdirrohman">
                <Image
                  src="github-code-source-svgrepo-com.svg"
                  alt="Github"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://resume.io/r/Ix499c1FY">
                <Image
                  src="curriculum-vitae-resume-svgrepo-com.svg"
                  alt="Resume.io"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        className="hero min-h-screen bg-gray-900 text-white"
        id="experience-section"
      >
        <div className="hero-content text-left">
          <div className="max-w-full">
            <h2 className="text-3xl font-bold mb-5 underline">
              Professional Experiences
            </h2>
            <ul className="list-disc list-inside space-y-7">
              <li className="text-2xl font-semibold">
                Full Stack Web Developer - PT Kasir Pintar Internasional (2019 -
                Present)
                <p className="text-lg font-medium mt-2">
                  &quot;I have been working as a Full Stack Web Developer since
                  June 2019, developing internal systems for administrative and
                  monitoring purposes, as well as external systems to enhance
                  the company&apos;s business interests. These include{" "}
                  <Link
                    href="https://kasirpintar.co.id"
                    target="_blank"
                    className="text-teal-500"
                  >
                    Landing Pages
                  </Link>
                  ,{" "}
                  <Link
                    href="https://kasirpintar.co.id/solusi"
                    target="_blank"
                    className="text-cyan-500"
                  >
                    Web Articles
                  </Link>
                  ,{" "}
                  <Link
                    href="https://status.kasirpintar.co.id"
                    target="_blank"
                    className="text-indigo-400"
                  >
                    Web Monitoring of Application Status
                  </Link>
                  ,{" "}
                  <Link
                    href="https://kasirpintar.co.id/account"
                    target="_blank"
                    className="text-lime-500"
                  >
                    Back Office v1
                  </Link>
                  , and{" "}
                  <Link
                    href="https://front-backoffice.kpntr.com"
                    target="_blank"
                    className="text-amber-500"
                  >
                    Back Office v2
                  </Link>
                  .&quot;
                </p>
              </li>
              <li className="text-2xl font-semibold">
                Freelance Software Developer - Self Employed (2019 - Present)
                <p className="text-lg font-medium mt-2">
                  &quot;Creating user-friendly, responsive, and scalable
                  solutions using modern technologies such as React, Typescript,
                  Flutter, etc. I have worked with clients from various
                  industries and government institutions, such as
                  administration, manufacturing, marketing, etc. Solving complex
                  problems and delivering high-quality products that meet the
                  needs and expectations of clients.&quot;
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="hero min-h-screen bg-gray-900 text-white"
        id="project-section"
      >
        <div className="hero-content">
          <div className="max-w-full">
            <h2 className="text-3xl font-bold mb-5 underline">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="card bg-base-100 shadow-xl bg-gray-800">
                <div className="card-body space-y-2">
                  <h2 className="card-title">PT Nobel Bangun Perkasa </h2>
                  <h3>Website Landing Page</h3>
                  <div className="flex gap-x-2">
                    <Image
                      src="laravel-mark-rgb-red.svg"
                      alt="Laravel"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="Vitejs-logo.svg"
                      alt="Vite"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="flowbite-logo.svg"
                      alt="Flowbite"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <Link
                      href="https://nobelbangunperkasa.co.id/"
                      target="_blank"
                      className="btn btn-outline btn-info btn-sm capitalize"
                    >
                      Visit Site
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl bg-gray-800">
                <div className="card-body space-y-2">
                  <h2 className="card-title">CV. Sinus Galvalum</h2>
                  <h3>E-Catalogue & Point of Sales (Web Based)</h3>
                  <div className="flex gap-x-2">
                    <Image
                      src="laravel-mark-rgb-red.svg"
                      alt="Laravel"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="Vitejs-logo.svg"
                      alt="Vite"
                      width={20}
                      height={20}
                    />
                    <Image src="react.svg" alt="React" width={20} height={20} />
                    <Image
                      src="WordPress-logotype-wmark-white.svg"
                      alt="Wordpress"
                      width={30}
                      height={20}
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <Link
                      href="https://bengkalan.com/"
                      target="_blank"
                      className="btn btn-outline btn-info btn-sm capitalize"
                    >
                      Visit Site
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl bg-gray-800">
                <div className="card-body space-y-2">
                  <h2 className="card-title">PT Selaras Husada</h2>
                  <h3>ERP System (Web Based)</h3>
                  <div className="flex gap-x-2">
                    <Image
                      src="laravel-mark-rgb-red.svg"
                      alt="Laravel"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="Vitejs-logo.svg"
                      alt="Vite"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="flowbite-logo.svg"
                      alt="Flowbite"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <Link
                      href="https://selhud.com/"
                      target="_blank"
                      className="btn btn-outline btn-info btn-sm capitalize"
                    >
                      Visit Site
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl bg-gray-800">
                <div className="card-body space-y-2">
                  <h2 className="card-title">
                    Department of Labour (Bangkalan Regency)
                  </h2>
                  <h3>Labour Reporting System</h3>
                  <div className="flex gap-x-2">
                    <Image
                      src="laravel-mark-rgb-red.svg"
                      alt="Laravel"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="bootstrap-logo.svg"
                      alt="Bootstrap"
                      width={35}
                      height={5}
                    />
                    <Image
                      src="flutter.svg"
                      alt="Flutter"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <Link
                      href="/Disnaker_BKL_Archived.webp"
                      target="_blank"
                      className="btn btn-outline btn-warning btn-sm capitalize"
                    >
                      Archived
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl bg-gray-800">
                <div className="card-body space-y-2">
                  <h2 className="card-title">Goverment of Tlangoh Village</h2>
                  <h3>Home Page & Admin Portal</h3>
                  <div className="flex gap-x-2">
                    <Image
                      src="new-php-logo.svg"
                      alt="PHP"
                      width={40}
                      height={40}
                    />
                    <Image
                      src="bootstrap-logo.svg"
                      alt="Bootstrap"
                      width={35}
                      height={5}
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <Link
                      href="/Desa_Tlangoh_Archived.webp"
                      target="_blank"
                      className="btn btn-outline btn-warning btn-sm capitalize"
                    >
                      Archived
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer p-10 footer-center bg-gray-800 text-white text-lg">
        Kievin Abdirrohman © {new Date().getFullYear()} - All right reserved
      </footer>
    </>
  );
}
