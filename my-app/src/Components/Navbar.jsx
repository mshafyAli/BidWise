import React from "react";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const components = [
  {
    title: "Pay Per Click (PPC)",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Social Media Marketing",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Serach Engine Optimization (SEO)",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Email Marketing",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Influncer Marketing",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";


  return (
    <nav className={`${isHome ? "bg-[#0D0D1F]" : "bg-transparent"}  w-full  transition-colors duration-300`}>
      <div className="layout  py-6 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
        <div>
        <Link href="/">
          <Image
              src="/logo.png"
              alt="Logo"
              width="300"
              height="300"
              quality={60}
              priority
              className=""
            />
          </Link>
        </div>

          {/* Navigation Links */}

          <NavigationMenu className="relative z-50 ">
            <Link href="/" className="text-white pr-4">
              About
            </Link>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* <NavigationMenuTrigger className="bg-[#0D0D1F] text-white">
                  Development
                </NavigationMenuTrigger> */}
                <NavigationMenuTrigger className={`${isHome ? "bg-[#0D0D1F]" : "bg-transparent"} text-white `}>
  Development
</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-tertiary text-white">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <FaReact className="h-6 w-6 text-blue-500" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-white">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/web-development" title="Web Development">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="App Development">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="E-commerce Websites"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[#0D0D1F] text-white">
                  Digital Marketing
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-tertiary text-white">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-white">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="">
                <NavigationMenuTrigger className="bg-[#0D0D1F] text-white">
                  AI Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-tertiary text-white relative">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]  ">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <FaReact className="h-6 w-6 text-blue-500" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-white">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="ChatBot Development">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="AI Enterprise Search"
                    >
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="AI Automation"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <Link href="/" className="text-white pl-4">
              Results
            </Link>
          </NavigationMenu>

          {/* CTA Button */}
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-[#d1165f] transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function ListItem({ title, children, href }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug textwhite">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

