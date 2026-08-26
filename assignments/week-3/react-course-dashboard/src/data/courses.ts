import type { Course } from './../components/Interfaces.tsx';

export const courseData: Course[] = [
    {
        id: 120,
        title: "Calculus 1",
        description: "This course introduces single variable calculus, including limits, continuity, derivatives, and integrals.",
        duration: 3,
        level: "Beginner"
    },
    {
        id: 121,
        title: "Calculus 2",
        description: "This calculus course covers infinite sequences and series, advanced integration, parametric equations, polar coordinates, and differential equations.",
        duration: 3,
        level: "Beginner"
    },
    {
        id: 130,
        title: "Physics 1",
        description: "This course focuses on classical mechanics. The topics include kinematics, Newton's Laws, force, momentum, energy, rotation, oscillation, and fluids.",
        duration: 4,
        level: "Beginner"
    },
    {
        id: 131,
        title: "Physics 2",
        description: "This course focuses on electricity, magnetism, circuits, waves, and optics.",
        duration: 4,
        level: "Beginner"
    },
    {
        id: 210,
        title: "Modern Physics",
        description: "This course is an introduction to modern physics. The course introduces special relativity, quantum mechanics, wave mechanics, atomic physics, nuclear physics, and particle physics.",
        duration: 4,
        level: "Intermediate",
        featured: true
    },
    {
        id: 360,
        title: "Quantum Mechanics 1",
        description: "This course covers the foundations of quantum mechanics. The topics include dirac notation, linear operators, observables, spin, wave mechanics, the Schrödinger Equation, Heisenberg's uncertainty principle, and three dimensional systems.",
        duration: 3,
        level: "Advanced",
        featured: true
    }
];
