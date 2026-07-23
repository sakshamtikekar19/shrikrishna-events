"use client";

import { PageHeader } from "@/components/seo/PageHeader";
import { Gallery } from "@/components/sections/Gallery";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="premium-container py-12">
        <Breadcrumbs />
      </div>

      <PageHeader
        title="Royal Gallery"
        description="Explore our visual journey of creating divine celebrations and grand executions."
        badge="Moments"
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
