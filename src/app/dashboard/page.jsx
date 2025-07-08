import { getAuthsession } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getAuthsession();
  if (!session) {
    return (
      <section className="flex w-full justify-center items-center h-screen ">
        Not Authorized
      </section>
    );
  }
  return (
    <section className="flex w-full justify-center items-center h-screen ">
      <h1> welcome back, {session.user.name}</h1>
    </section>
  );
}
