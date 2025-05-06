import { useEffect, useRef, useState } from "react";
import { SUPPORTED_LANGUAGES } from "@/constants";
import { useTranslation } from "react-i18next";

interface ILanguageSwitcherProps {
  isSidebar?: boolean;
  showText?: boolean;
  foldSidebar?: boolean;
  className?: string;
  buttonClassName?: string;
}

export const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = ({
  isSidebar,
  showText = false,
  foldSidebar = true,
  className,
  buttonClassName,
}) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleLanguageChange = (code: string) => {
    //const language = event.target.value;
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the dropdown
      }
    };

    // Use mousedown instead of click to capture before other click events
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      title={t("sidebar.langToggle")}
      data-testid="langContainer"
      className={`z-10 flex flex-col items-stretch text-sm ${isSidebar ? "w-full" : ""} ${className ? className : "relative"}`}
    >
      <button
        data-testid="langButton"
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex cursor-pointer items-center justify-start gap-[15px] ${isSidebar ? "w-full p-[15px]" : ""} ${buttonClassName ? buttonClassName : ""}`}
      >
        <div
          className={`flex shrink-0 items-center justify-center gap-1 ${isSidebar ? "h-[30px] w-[30px] rounded-full bg-white text-zinc-800 dark:bg-white dark:text-sky-800" : "w-fit rounded-md bg-custom-blue p-[5px] text-white"}`}
        >
          <span>{selectedLanguage.toUpperCase()}</span>
          {!isSidebar && (
            <svg
              className={`h-2 w-2 transition-all duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          )}
        </div>
        {showText && (
          <span
            className={`shrink-0 text-lg text-white transition-all duration-200 ease-in-out ${foldSidebar ? "opacity-0" : "opacity-1"}`}
          >
            {t("sidebar.langToggle")}
          </span>
        )}
      </button>

      <div
        data-testid="langDropdown"
        ref={dropdownRef}
        className={`absolute z-10 w-full overflow-hidden transition-all duration-200 ease-in-out dark:bg-white ${isOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"} ${isSidebar ? "bottom-14 left-[15px] max-w-[30px] rounded-xl bg-white" : "top-9 right-0 rounded-md bg-slate-100"}`}
      >
        <div>
          {SUPPORTED_LANGUAGES.map((language) => (
            <div
              key={language}
              className="flex w-full items-center justify-center"
            >
              <input
                type="radio"
                id={language}
                name="language"
                value={language}
                checked={language === selectedLanguage}
                onChange={() => handleLanguageChange(language)}
                className="peer hidden"
              />
              <label
                htmlFor={language}
                className="w-full cursor-pointer py-1 text-center text-zinc-800 peer-checked:bg-slate-200 dark:text-sky-800"
              >
                {language.toUpperCase()}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
