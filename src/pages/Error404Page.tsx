/* import { PageServices } from "@/components";
import { useTranslation } from "react-i18next"; */

export const Error404Page: React.FC = (): React.ReactElement => {
  // const { t } = useTranslation();
  return (
    <>
      <main className="relative ml-[60px] flex max-h-screen min-h-dvh w-full flex-col items-center justify-center overflow-auto sm:ml-0">
        <h2 className="w-full text-center text-4xl font-semibold dark:text-white">
          {`404 | ${/* t( */ "common.error404" /* ) */}`}
        </h2>
      </main>
      {/* <PageServices /> */}
    </>
  );
};
