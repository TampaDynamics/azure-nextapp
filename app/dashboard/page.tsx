"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "@/components/ui/buttons/LogoutButton";
export default function Dashboard() {
  const session = useSession();
  return (
    <div>
      <p>dashboard page </p>
      <p>User email: {session.data?.user?.email}</p>
        <LogoutButton />
    </div>
  );
}