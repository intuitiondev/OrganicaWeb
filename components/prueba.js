import { useTranslation } from "next-i18next";

export const FooterTest = () => {
  const { t } = useTranslation("global");

  return (
    <footer>
      <p>{t("fo")}</p>
    </footer>
  );
};
