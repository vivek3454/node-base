import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout-button";

const Page = async () => {
  await requireAuth();

  const { data } = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-6 items-center justify-center">
      Protected server component
      <LogoutButton />
    </div>
  );
};

export default Page;
