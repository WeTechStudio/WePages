"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SkeletonCard } from "./ui/SkeletonCard";
import { OptimizedImage } from "./ui/OptimizedImage";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BLUR_DATA_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e2e8f0' width='400' height='300'/%3E%3C/svg%3E";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
    >
      <OptimizedImage
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        blurDataURL={BLUR_DATA_URL}
        priority={false}
        className="w-full h-48"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>
    </motion.article>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} showImage imageAspect="aspect-[4/3]" lines={3} />
      ))}
    </div>
  );
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProjects([
        {
          id: 1,
          title: "E-commerce Moderno",
          description: "Tienda online con Next.js 14 y Stripe",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        },
        {
          id: 2,
          title: "Dashboard Analytics",
          description: "Panel de control con datos en tiempo real",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        },
        {
          id: 3,
          title: "Landing Page SEO",
          description: "Página optimizada para conversión",
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
        },
      ]);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <ProjectsSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
