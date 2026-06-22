import React from 'react'

function AboutUsPage() {
    return (
        <div className="container mx-auto py-[50px]">
            <div className="bg-[#3a3a3a] rounded-lg p-3 ps-6 mb-6 ">
                <h1 className="text-2xl ">About us</h1>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed border border-gray-600 p-4 rounded-lg">
                <p>
                    Welcome to <span className="text-orange-500">[Website Name]</span>, your ultimate online destination for discovering businesses, services, and solutions tailored to your needs. We are committed to simplifying the process of finding trusted businesses across various industries with a user-friendly platform that puts convenience at the forefront. Whether you're seeking a local café, a professional service, or a specialized provider, our website connects you with a vast network of businesses that meet your specific criteria.
                </p>

                <p>
                    At <span className="text-orange-500">[Website Name]</span>, we understand that finding the right business can be time-consuming and sometimes overwhelming. That's why we've created an intuitive, easy-to-navigate platform where you can search, compare, and read reviews from real customers. We strive to be a comprehensive resource that brings together businesses of all sizes, from established companies to emerging startups, ensuring you can find exactly what you're looking for.
                </p>

                <p>
                    Our mission is simple: to make local and global business connections seamless. We believe that every business, big or small, deserves visibility, and every consumer deserves access to honest, reliable information. We continuously work to improve our platform to enhance the user experience and support businesses in reaching their full potential.
                </p>

                <p>
                    Thank you for choosing [Your Website Name]. We are dedicated to providing a valuable service that helps both businesses and customers thrive. Explore, connect, and discover the best that the world has to offer!
                </p>
            </div>
        </div>

    )
}

export default AboutUsPage