'use client';

interface AboutData {
    title: string;
    paragraphs: string[];
}

const aboutData: AboutData = {
    title: 'About this service',
    paragraphs: [
        'Expert React/Node.js development for your web applications. Highly optimized and clean code.',
        'With years of experience in the development industry, I ensure high-quality delivery tailored to your specific business needs. Every project starts with a discovery phase where I understand your brand voice and goals.'
    ]
};

export default function About() {
    return (
        <section>
            <h1 className="text-xl font-medium text-white mb-3">{aboutData.title}</h1>
            <div className="space-y-1.5">
                {aboutData.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-white/80 leading-relaxed text-sm">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}
