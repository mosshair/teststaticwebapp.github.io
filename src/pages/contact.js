import React from "react";
import {
  // ArticlesSection,
  // InterestsSection,
  Page,
  // ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Logo from "../components/Logo.js";
import "../gatsby-theme-portfolio-minimal/globalStyles/theme.css";
import Footer from "../components/footer.js";
import Contact from "../components/Contact.js";

export default function IndexPage() {
  return (
    <>
      <Logo />
      <Seo title="Contact - Prenlyn" />
      <Page>
        <Contact />
        <Footer />
      </Page>
    </>
  );
}
