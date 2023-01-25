import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  // InterestsSection,
  Page,
  // ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Logo from "../components/Logo.js";
import "../gatsby-theme-portfolio-minimal/globalStyles/theme.css";
import Services from "../components/services.js";
import Questions from "../components/Questions.js";
import Footer from "../components/footer.js";
import Hero from "../components/hero.js";

export default function IndexPage() {
  return (
    <>
      <Logo />
      <Seo title="Prenlyn" />
      <Page>
        <Hero />
        {/* <HeroSection sectionId="hero" /> */}
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
        /> */}
        <Services />
        {/* <AboutSection sectionId="about" heading="Why Choose us?" /> */}
        <Questions />
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        {/* <ProjectsSection sectionId="features" heading="Built-in Features" /> */}
        <ContactSection sectionId="github" heading="Contact us" />
        <Footer />
      </Page>
    </>
  );
}
