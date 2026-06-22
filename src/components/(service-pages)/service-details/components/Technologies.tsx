'use client';

interface TechCategory {
    label: string;
    techs: string[];
}

const technologiesData: TechCategory[] = [
    {
        label: 'Frontend',
        techs: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Next JS', 'Tailwind CSS', 'Bootstrap', 'Material UI']
    },
    {
        label: 'Backend',
        techs: ['PHP Laravel', 'Node JS', 'Express JS']
    },
    {
        label: 'Databases',
        techs: ['MySQL', 'MongoDB', 'PostgreSQL']
    }
];

export default function Technologies() {
    return (
        <section>
            <h2 className="text-xl font-medium text-white mb-3">Technologies We Specialize In</h2>
            <div className="space-y-1.5">
                {technologiesData.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-white/80 font-normal text-sm">
                            <span className="text-primary font-medium">{category.label}:</span>{' '}
                            {category.techs.join(', ')}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
