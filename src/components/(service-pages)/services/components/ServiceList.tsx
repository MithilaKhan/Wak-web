
import ServiceCard from '@/shared/ServiceCard';
import { ArrowRight } from 'lucide-react';

const servicesData = [
    {
        id: 1,
        name: 'Harry Thomas Wilson',
        avatar:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Development',
        description:
            'I will do website development as full stack web developer, front end, back-end development....',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 2,
        name: 'Olivia Grace Smith',
        avatar:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Designer',
        description: 'I will do website ui ux design, app ui ux design, ui ux design expert',
        price: 320,
        coverImage:
            'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 3,
        name: 'Isla Charlotte Brown',
        avatar:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Copy writing',
        description: 'I will be your professional website content writer, SEO copywriter.',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 4,
        name: 'Isla Charlotte Brown',
        avatar:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Copy writing',
        description: 'I will be your professional website content writer, SEO copywriter.',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 5,
        name: 'Olivia Grace Smith',
        avatar:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Designer',
        description: 'I will do website ui ux design, app ui ux design, ui ux design expert',
        price: 320,
        coverImage:
            'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 6,
        name: 'Harry Thomas Wilson',
        avatar:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Development',
        description:
            'I will do website development as full stack web developer, front end, back-end development....',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
];

export default function ServicesList() {
    return (
        <section className="pb-16 md:py-20 bg-[#1e1e1e]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-1 h-10 bg-primary rounded-full"></div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                                    Our Services
                                </h2>
                                <p className="text-gray-400 text-sm mt-2">
                                    Browse through expert-vetted professionals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
