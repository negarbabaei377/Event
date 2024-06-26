import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Navitems, MobileNav } from "@/components/shared";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-30">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={128}
            height={38}
          />
        </Link>
        <SignedIn>
          <nav className="hidden md:flex justify-between w-full max-w-xs">
            <Navitems />
          </nav>
        </SignedIn>
        <div className="flex justify-end w-32 gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
