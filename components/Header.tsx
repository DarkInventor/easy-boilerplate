  import Image from "next/image";
  import Link from "next/link";
  // config
  import config from "@/config/general";

  const Header = () => {
    return (
      <header className="flex-col sm:flex-row flex justify-between items-start">
        <Image src={"/Easy Boilerplate.svg"} width={180} height={60} alt={config.title} />
        <nav>
          <ul className="flex sm:mt-0 mt-4 items-center lg:gap-2 gap-2 font-medium text-base sm:text-lg">
            <li className="text-black text-md">
              <Link href="https://x.com/kathanmehtaa" passHref legacyBehavior>
                <a
                  className="px-5 py-2 rounded hover:underline hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </Link>
            </li>
            <li className="bg-activeButton text-white rounded py-2">
              <Link href={config.subscribeForm} passHref legacyBehavior>
                <a
                  className="p-5 rounded text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pre-order <span className="line-through">($199)</span> $19
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;
