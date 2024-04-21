import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col flex-center sm:justify-between wrapper gap-4 p-5n text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt={"logo"}
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Evently. All rights reserved.</p>
      </div>
    </footer>
  );
};
