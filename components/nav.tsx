import Link from "next/link";
import LoginBtn from "./login";
export default function Component() {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h3 className="font-bold text-lg">logo</h3>
      </Link>
      <ul className="flex items-center gap-6">
        <LoginBtn />
      </ul>
    </nav>
  );
}
