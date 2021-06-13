import React from "react";
import BreadcrumbAddon from "../../addons/breadcrumb.addon";
import NewsAddon from "../../addons/news.addon";
import ProjectsAddon from "../../addons/projects.addon";
import TestimonialsAddon from "../../addons/testimonials.addon";
import MainLayout from "../../components/layouts/main.layout";

export default function News() {
  return (
    <MainLayout title="Our Stories">
      <BreadcrumbAddon title="Our Stories" links={["Home", "News"]} />
      <NewsAddon isHome={false} projects={[1, 2, 3, 4, 5]} />
      <TestimonialsAddon />
    </MainLayout>
  );
}
