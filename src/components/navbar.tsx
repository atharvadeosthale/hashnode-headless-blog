import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { getBlogName } from "@/lib/requests";

const GITHUB_URL = "https://github.com/atharvadeosthale/hashnode-headless-blog";

export default async function Navbar() {
  const title = await getBlogName();

  return (
    <div className="w-full border-b mb-5">
      <div className="max-w-7xl w-full px-3 xl:p-0 my-5 mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">{title.displayTitle || title.title}</Link>
        </div>
        <div className="flex items-center gap-5">
          <ThemeToggler />

          <Button variant="secondary">
            <Link
              className="gap-2 flex items-center"
              href={GITHUB_URL}
              target="_blank"
            >
              <GitHubLogoIcon /> GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
