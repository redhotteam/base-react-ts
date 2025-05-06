import { useTranslation } from "react-i18next";

export const HelloPage: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex size-full flex-col items-center justify-center overflow-auto sm:ml-0">
        {/* <LanguageSwitcher className="absolute top-4" /> */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">{t("welcome")}</h1>
          <p className="text-lg">{t("description")}</p>
        </div>
      </div>
    </>
  );
};
