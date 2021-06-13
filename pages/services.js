import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AboutAddon from "../addons/about.addon";
import BreadcrumbAddon from "../addons/breadcrumb.addon";
import TestimonialsAddon from "../addons/testimonials.addon";
import ServiceCard from "../components/cards/service.card";
import BoxContainer from "../components/layouts/container.layout";
import MainLayout from "../components/layouts/main.layout";

export default function Services() {
  return (
    <MainLayout title="Services">
      <BreadcrumbAddon title="Services" links={["Home", "Services"]} />

      <BoxContainer>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="30px" py="80px">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </SimpleGrid>
      </BoxContainer>
      <TestimonialsAddon />
    </MainLayout>
  );
}
