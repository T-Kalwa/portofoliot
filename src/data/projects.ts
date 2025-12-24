export interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        github: string;
        demo: string | null;
    };
    image: string | null;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: "Nabib Beauty",
        description: "Modern appointment booking platform for a beauty salon. Includes service management, admin panel, and responsive design.",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
        links: { github: "https://github.com", demo: "https://nabib-beauty.vercel.app" },
        image: "/images/projects/nabib-beauty.png", // We'll handle images later
        featured: true // Make this large in Bento
    },
    {
        title: "Restaurant QR System",
        description: "Full-stack ordering system with real-time kitchen updates and admin dashboard.",
        tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
        links: { github: "https://github.com", demo: null },
        image: "/images/projects/restaurant.png",
        featured: false
    },
    {
        title: "Auth Microservice",
        description: "Centralized authentication service with JWT and role management.",
        tags: ["FastAPI", "Python", "Redis", "Docker"],
        links: { github: "https://github.com", demo: null },
        image: "/images/projects/auth.png",
        featured: false
    }
];
