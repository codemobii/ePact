import { Text } from "@chakra-ui/layout";
import React from "react";
import BreadcrumbAddon from "../../addons/breadcrumb.addon";
import SingleAddon from "../../addons/single.addon";
import MainLayout from "../../components/layouts/main.layout";

export default function ProjectDesc() {
  return (
    <MainLayout title="How is it going">
      <BreadcrumbAddon
        title="How is is going"
        links={["Home", "News", "Discover"]}
      />
      <SingleAddon
        desc={
          <>
            <Text>
              Ceres Imaging works closely with agriculture professionals to
              tackle farm management challenges—from irrigation issues to pest
              and disease outbreaks.{" "}
            </Text>
            <Text>
              Ceres Imaging works closely with agriculture professionals to
              tackle farm management challenges—from irrigation issues to pest
              and disease outbreaks.{" "}
            </Text>
            <Text>
              Ceres Imaging works closely with agriculture professionals to
              tackle farm management challenges—from irrigation issues to pest
              and disease outbreaks.{" "}
            </Text>
            <Text>
              Ceres Imaging works closely with agriculture professionals to
              tackle farm management challenges—from irrigation issues to pest
              and disease outbreaks.{" "}
            </Text>
          </>
        }
      />
    </MainLayout>
  );
}
