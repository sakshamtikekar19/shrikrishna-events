"use client";

import { PageHeader } from "@/components/seo/PageHeader";
import { Gallery } from "@/components/sections/Gallery";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <PageHeader
        title="Royal Gallery"
        description="Explore our visual journey of creating divine celebrations and grand executions."
        breadcrumbs={breadcrumbItems}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Gallery />
      </motion.div>
    </main>
  );
}
