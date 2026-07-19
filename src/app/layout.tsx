import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Image
            src={"3m.svg"}
            alt={"3m logo"}
            width={300}
            height={177}
            loading="eager"
          />
          <nav>
            <ul>
              <li>
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
