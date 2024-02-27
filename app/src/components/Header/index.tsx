"use client";

import { useUserStore } from "@/stores/user";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { LoginDialog } from "../Auth/LoginDialog";
import { RegisterDialog } from "../Auth/RegisterDialog";

export const Header = () => {
  const { user } = useUserStore();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/scoreboard", label: "Scoreboard" },
  ];

  return (
    <>
      <LoginDialog open={openLogin} setOpen={setOpenLogin} />
      <RegisterDialog open={openRegister} setOpen={setOpenRegister} />
      <header className="h-16 border-b ">
        <div className="h-full max-w-3xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-semibold">
            Typing Game
          </Link>
          <nav>
            <ul className="flex gap-4 items-center">
              {links.map((link) => (
                <li key={link.to} className="hover:underline hover:text-[#17B569] ">
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
              {user ? (
                <>
                  <Link href="/profile" className="hover:underline hover:text-[#17B569]">
                    {user.username}
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex gap-2">
                    <Button
                      variant={"outline"}
                      onClick={() => {
                        setOpenRegister(true);
                      }}
                    >
                      Sign up
                    </Button>
                    <Button
                      onClick={() => {
                        setOpenLogin(true);
                      }}
                    >
                      Log in
                    </Button>
                  </div>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
