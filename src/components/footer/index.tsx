"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Footer() {
  const pathname = usePathname();
  const getSrc = (name: string) => {
    return `/images/${name}${pathname.includes(name) ? "_selected" : ""}.svg`;
  };
  const isActive = (name: string) => pathname.includes(name);

  const handleScroll = () => {
    if (window.innerWidth > 425) return;
    const footer: HTMLElement | null = document.querySelector("footer");
    if (!footer) return;
    const opacity = Math.max(0.4, 1 - window.scrollY / 300);
    footer.style.opacity = String(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    //TODO: Create Component for each item
    //TODO: Create each page
    //TODO: Buil For you layout / Following layout
    //TODO: Messages page
    //TODO: Tablet
    //TODO: Desktop
    <footer className="hidden max-[425px]:flex fixed bottom-0 left-0 right-0 h-[53px] bg-black border-t border-twitter-dark-gray z-50 transition-opacity duration-300">
      <nav className="h-full w-full">
        <ul className="flex flex-row items-center h-full w-full">
          <li key="1" className="flex-1 flex">
            <Link href={"/home"} className="w-full flex justify-center">
              <Image
                src={getSrc("home")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="home"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="2" className="flex-1 flex">
            <Link href={"/explore"} className="w-full flex justify-center">
              <Image
                src={getSrc("explore")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="explore"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="3" className="flex-1 flex">
            <Link href={"/grok"} className="w-full flex justify-center items-center">
              {isActive("grok") ? (
                <svg viewBox="0 0 42 42" aria-hidden="true" className="h-[26px] w-[26px] m-[8px] fill-white">
                  <g>
                    <path clipRule="evenodd" d="M8 0C3.582 0 0 3.582 0 8v26c0 4.418 3.582 8 8 8h26c4.418 0 8-3.582 8-8V8c0-4.418-3.582-8-8-8H8zm19.997 17.35l-11.1 8.19 15.9-15.963v.015L37.391 5c-.082.117-.165.23-.248.345-3.49 4.804-5.194 7.153-3.826 13.03l-.009-.008c.943 4.001-.065 8.438-3.322 11.693-4.106 4.107-10.677 5.02-16.087 1.324l3.772-1.745c3.454 1.355 7.232.76 9.947-1.954 2.716-2.714 3.325-6.666 1.96-9.956-.259-.623-1.037-.78-1.58-.378zm-13.292-2.574c-3.314 3.31-3.983 9.047-.1 12.755l-.003.003L4 37c.663-.913 1.485-1.776 2.306-2.639l.04-.042c2.346-2.464 4.67-4.906 3.25-8.357-1.903-4.622-.795-10.038 2.73-13.56 3.664-3.66 9.06-4.583 13.568-2.729.998.37 1.867.897 2.545 1.387l-3.764 1.737c-3.505-1.47-7.52-.47-9.97 1.98z" />
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 33 32" aria-hidden="true" className="h-[26px] w-[26px] m-[8px] fill-white">
                  <g>
                    <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466" />
                  </g>
                </svg>
              )}
            </Link>
          </li>
          <li key="4" className="flex-1 flex">
            <Link
              href={"/notifications"}
              className="w-full flex justify-center"
            >
              <Image
                src={getSrc("notifications")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="notifications"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="5" className="flex-1 flex">
            <Link href={"/messages"} className="w-full flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[26px] w-[26px] m-[8px] fill-white"
              >
                <g>
                  {isActive("messages") ? (
                    <path d="M22.7 11.7c0 5.683-4.84 10.2-10.699 10.2-1.784 0-2.96-.555-3.95-1.095-1.876.768-4.02 1.2-6.245-.075l-.885-.505.524-.875c.54-.904.77-1.581.848-2.118.078-.526.02-.98-.11-1.463-.066-.25-.15-.502-.247-.788-.095-.277-.204-.59-.301-.92-.199-.674-.36-1.449-.332-2.39C1.322 6.002 6.154 1.5 12.002 1.5c5.859 0 10.7 4.518 10.7 10.2z" />
                  ) : (
                    <path d="M20.7 11.7c0-4.48-3.844-8.2-8.699-8.2-4.854 0-8.698 3.72-8.698 8.2v.015l-.001.014c-.02.667.09 1.225.25 1.767.083.28.176.545.276.839.098.285.202.595.288.918.177.663.284 1.401.156 2.271-.086.582-.274 1.191-.582 1.855 1.264.375 2.55.053 4.013-.599l.455-.203.437.242c1.07.594 1.917 1.08 3.406 1.08 4.855 0 8.7-3.72 8.7-8.199zm2 0c0 5.683-4.84 10.2-10.699 10.2-1.784 0-2.96-.555-3.95-1.095-1.876.768-4.02 1.2-6.245-.075l-.885-.505.524-.875c.54-.904.77-1.581.848-2.118.078-.526.02-.98-.11-1.463-.066-.25-.15-.502-.247-.788-.095-.277-.204-.59-.301-.92-.199-.674-.36-1.449-.332-2.39C1.322 6.002 6.154 1.5 12.002 1.5c5.859 0 10.7 4.518 10.7 10.2z" />
                  )}
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
