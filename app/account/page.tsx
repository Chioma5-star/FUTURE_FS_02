"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Account</h1>
      <p>Email: {session?.user?.email}</p>
      <p>Name: {session?.user?.name}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
