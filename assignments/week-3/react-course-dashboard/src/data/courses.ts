import type { Course } from './../components/Interfaces.tsx';

export const courseData: Course[] = [
    {
        id: 120,
        title: "Calculus 1",
        description: "This course introduces single variable calculus, including limits, continuity, derivatives, and integrals.",
        duration: 3,
        level: 100
    },
    {
        id: 130,
        title: "Physics 1",
        description: "This course focuses on classical mechanics. The topics include kinematics, Newton's Laws, force, momentum, energy, rotation, oscillation, and fluids.",
        duration: 4,
        level: 100
    },
    {
        id: 210,
        title: "Modern Physics",
        description: "This course is an introduction to modern physics. The course introduces special relativity, quantum mechanics, wave mechanics, atomic physics, nuclear physics, and particle physics.",
        duration: 4,
        level: 200,
        featured: true
    }
];
