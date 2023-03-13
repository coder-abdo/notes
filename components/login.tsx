import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <li className="list-none flex items-center gap-8">
        <button
          className="py-2 px-4 bg-gray-700 text-white rounded-md text-sm"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <Link href={"/dashboard"}>
          <Image
            className="w-14 rounded-full"
            width={64}
            height={64}
            src={session.user?.image || ""}
            alt={session.user?.name || ""}
            priority
          />
        </Link>
      </li>
    );
  }
  return (
    <li className="list-none">
      <button
        className="py-2 px-4 bg-gray-700 text-white rounded-md text-sm"
        onClick={async () => signIn()}
      >
        Sign in
      </button>
    </li>
  );
}
