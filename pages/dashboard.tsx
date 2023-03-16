import { useSession } from "next-auth/react";
export default function Dashboard() {
  const { data, status } = useSession();
  if (status === "loading") {
    return <div>loading...</div>;
  }
  if (status === "unauthenticated") {
    return (
      <h1 className="my-6 font-bold text-gray-700 text-lg">
        you need to login first
      </h1>
    );
  }
  return (
    <main>
      <h1 className="text-2xl font-bold">welcome back {data?.user?.name}🔥 </h1>
    </main>
  );
}
