import { Poppins } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
function Index() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-900">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>Welcome to Admin Panel</h1>
        <p className="text-white text-lg">Please sign in before editing the content</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

export default Index;
