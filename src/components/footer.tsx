import { getBlogName } from "@/lib/requests";

export default async function Footer() {
  const title = await getBlogName();

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center w-full py-3 mt-10">
      <p className="text-gray-900 dark:text-gray-400">
        {title.displayTitle || title.title}
      </p>
    </footer>
  );
}
