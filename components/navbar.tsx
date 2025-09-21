import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { ArrowDownToLine, BrainCircuit, Github, Linkedin } from "lucide-react";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <BrainCircuit className="text-blue-500" />
            <p className="font-bold text-blue-500 drop-shadow [filter:drop-shadow(0_0_6px_#00a2ff)]">
              Maicom Mateus Rampi
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Github"
            href={siteConfig.links.github}
            className="flex items-center"
          >
            <Github
              className="
              animate-pulse
              text-blue-500
              transition
              [filter:drop-shadow(0_0_8px_#00a2ff)]
              hover:[filter:drop-shadow(0_0_16px_#00a2ff)]
            
            "
            />
          </Link>
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
            className="flex items-center"
          >
            <Linkedin
              className="
              animate-pulse
              text-blue-500
              transition
              [filter:drop-shadow(0_0_8px_#00a2ff)]
              hover:[filter:drop-shadow(0_0_16px_#00a2ff)]
            
            "
            />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* MENU MOBILE */}

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Github"
          href={siteConfig.links.github}
          className="flex items-center"
        >
          <Github
            size={25}
            className="
              text-blue-500
              transition
              [filter:drop-shadow(0_0_8px_#00a2ff)]
              hover:[filter:drop-shadow(0_0_16px_#00a2ff)]
            
            "
          />
        </Link>
        <Link
          isExternal
          aria-label="Github"
          href={siteConfig.links.github}
          className="flex items-center"
        >
          <Linkedin
            size={25}
            className="
              text-blue-500
              transition
              [filter:drop-shadow(0_0_8px_#00a2ff)]
              hover:[filter:drop-shadow(0_0_16px_#00a2ff)]
            
            "
          />
        </Link>
      </NavbarContent>
    </HeroUINavbar>
  );
};
