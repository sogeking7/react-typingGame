"use client";
import { useUserStore } from "@/stores/user";

export default function Home() {
  const { user } = useUserStore();
  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="inline">
        {user && (
          <span className="text-3xl font-semibold">
            Welcome, {user?.username} 👋
          </span>
        )}
      </div>
    </main>
  );
}
