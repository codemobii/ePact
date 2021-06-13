import React from "react";
import BreadcrumbAddon from "../addons/breadcrumb.addon";
import ProjectsAddon from "../addons/projects.addon";
import TestimonialsAddon from "../addons/testimonials.addon";
import MainLayout from "../components/layouts/main.layout";

export default function Projects() {
  return (
    <MainLayout title="Projects">
      <BreadcrumbAddon title="Our Projects" links={["Home", "Projects"]} />
      <ProjectsAddon isHome={false} projects={[1, 2, 3, 4, 5]} />
      <TestimonialsAddon />
    </MainLayout>
  );
}
