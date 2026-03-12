import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>© 2026 Christian Toscano. {t("footer.rights")}</p>
    </footer>
  );
};

export default Footer;
