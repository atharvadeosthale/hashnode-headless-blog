import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const GITHUB_URL = "https://github.com/atharvadeosthale/hashnode-headless-blog";

export default function Navbar() {
  return (
    <div className="w-full border-b">
      <div className="max-w-7xl w-full my-5 mx-auto flex justify-between items-center">
        <div>The coolest blog</div>
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
