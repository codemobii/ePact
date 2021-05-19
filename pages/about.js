import React from "react";
import AboutAddon from "../addons/about.addon";
import BreadcrumbAddon from "../addons/breadcrumb.addon";
import PartnerAddon from "../addons/partners.addon";
import ServicesAddon from "../addons/services.addon";
import TeamAddon from "../addons/team.addon";
import TestimonialsAddon from "../addons/testimonials.addon";
import MainLayout from "../components/layouts/main.layout";

export default function About() {
  return (
    <MainLayout title="About">
      <BreadcrumbAddon title="About Us" links={["Home", "About"]} />
      <AboutAddon title="Welcome to Eden Farm! This is our Story!" />
      <ServicesAddon isBg />
      <PartnerAddon />
      <TeamAddon />
      <TestimonialsAddon isWhiteBg />
    </MainLayout>
  );
}
