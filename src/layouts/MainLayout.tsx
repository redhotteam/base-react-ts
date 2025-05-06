import React from "react";
import { LanguageSwitcher } from "@/components";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = (): React.ReactElement => {
  return (
    <>
      <main className="relative ml-[60px] min-h-dvh w-full sm:ml-0">
        <div className="flex size-full min-h-dvh flex-col justify-center p-4">
          <Outlet />
          <LanguageSwitcher
            className="fixed top-3 right-3 z-10 sm:top-5 sm:right-5 [&&]:w-fit"
            buttonClassName="[&&]:w-fit"
          />
        </div>
      </main>
    </>
  );
};
