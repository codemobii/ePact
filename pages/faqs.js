import React from "react";
import BreadcrumbAddon from "../addons/breadcrumb.addon";
import FaqsAddon from "../addons/faqs.addon";
import ProjectsAddon from "../addons/projects.addon";
import TestimonialsAddon from "../addons/testimonials.addon";
import MainLayout from "../components/layouts/main.layout";

export default function Faqs() {
  return (
    <MainLayout title="FAQs">
      <BreadcrumbAddon
        title="Frequently Asked Questions"
        links={["Home", "FAQs"]}
      />
      <FaqsAddon />
    </MainLayout>
  );
}
