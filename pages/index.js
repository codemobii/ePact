import React from "react";
import AboutAddon from "../addons/about.addon";
import BannerAddon from "../addons/banner.addon";
import ProjectsAddon from "../addons/projects.addon";
import ServicesAddon from "../addons/services.addon";
import TestimonialsAddon from "../addons/testimonials.addon";
import MainLayout from "../components/layouts/main.layout";

export default function Home() {
  return (
    <MainLayout>
      <BannerAddon />
      <ServicesAddon />
      <ProjectsAddon />
      <AboutAddon isHome={true} />
      <TestimonialsAddon />
    </MainLayout>
  );
}
