'use client';

interface Service {
    id: string;
    name: string;
}

const servicesData: Service[] = [
    { id: '1', name: 'Complete Frontend and Backend Development' },
    { id: '2', name: 'Custom Website Development' },
    { id: '3', name: 'Figma to Website Conversion' },
    { id: '4', name: 'Secure REST API Development' },
    { id: '5', name: 'Seamless API Integration' },
    { id: '6', name: 'E-commerce Functionality' },
    { id: '7', name: 'Payment Gateway Integration' },
    { id: '8', name: 'SEO Optimization' },
    { id: '9', name: 'Responsive Design with Mobile Optimization' }
];

export default function Services() {
    return (
        <section>
            <h2 className="text-xl font-medium text-white mb-3">Services We Offer</h2>
            <ul className="space-y-1.5">
                {servicesData.map((service) => (
                    <li key={service.id} className="flex items-start gap-3 text-white/80">
                        <span className="text-white font-bold text-lg leading-none mt-1">•</span>
                        <span className="text-sm">{service.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
