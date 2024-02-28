"use client";
import { Attempts } from "@/components/Attempt/Attempts";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/user";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { user, resetUser } = useUserStore();

  // if (!user) {
  //   router.push("/");
  //   return;
  // }

  return (
    <main className="max-w-3xl mx-auto p-6">
      {user && (
        <>
          <div className="inline">
            <span className="text-3xl font-semibold">
              Welcome, {user?.username} 👋
            </span>
            <div className="mt-6">
              <Button onClick={() => resetUser()}>Logout</Button>
            </div>
            <hr className="my-6"></hr>
            <h1 className="text-2xl font-semibold">History</h1>
            <Attempts />
          </div>
        </>
      )}
    </main>
  );
}
