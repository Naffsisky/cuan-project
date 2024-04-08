import { Poppins } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
function Dashboard() {
  return (
    <div className={cn("flex h-full flex-col items-center justify-center bg-slate-900", font.className)}>
      Dashboard!
    </div>
  );
}

export default Dashboard;
