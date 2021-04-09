import React from "react";
import LangSelector from "../components/langSelector";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default function nosotros() {
  const router = useRouter();
  const { t } = useTranslation("global");
  return (
    <>
      <LangSelector />
      <div>{t("nosotros.title")}</div>
      <h2>{t("nosotros.title")}</h2>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["global"])),
  },
});
