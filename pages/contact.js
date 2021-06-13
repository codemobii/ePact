import React from "react";
import AboutAddon from "../addons/about.addon";
import BreadcrumbAddon from "../addons/breadcrumb.addon";
import MainLayout from "../components/layouts/main.layout";

export default function Contact() {
  return (
    <MainLayout title="Contact">
      <BreadcrumbAddon title="Contact Us" links={["Home", "Contact"]} />
      <AboutAddon title="Welcome to Eden Farm! This is our Story!" />
    </MainLayout>
  );
}
