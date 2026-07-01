const PrivacyPolicyPage = () => {
    return (
        <div className="container mx-auto py-[50px]">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 ps-6 mb-6 ">
                <h1 className="text-2xl text-white ">Privacy Policy</h1>
            </div>
            <div className="space-y-6 text-white/80 leading-relaxed border border-white/20 p-4 rounded-lg">
                <p>
                    At <span className="text-orange-500">[Website Name]</span>, we are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website. By using our platform, you consent to the practices described in this policy.
                </p>

                <div>
                    <h2 className="text-lg mb-2">Information Collection:</h2>
                    <p>
                        We collect personal information, such as your name, email address, and contact details, when you create an account or interact with our services. We may also collect non-personal data, such as your browser type, IP address, and usage patterns, to improve site functionality and user experience.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg mb-2">How We Use Your Information:</h2>
                    <p>
                        Your personal information is used to provide services, respond to inquiries, and personalize your experience on our website. We may send you updates, promotions, and other relevant information. We do not sell, trade, or rent your personal information to third parties.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg mb-2">Cookies:</h2>
                    <p>
                        We use cookies to enhance your experience on our site. These small files help us track website activity and preferences, enabling us to deliver tailored content and ads. You can control cookies through your browser settings.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg mb-2">Data Security:</h2>
                    <p>
                        We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg mb-2">Third-Party Links:</h2>
                    <p>
                        Our website may contain links to external sites. We are not responsible for the privacy practices of these third parties.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg mb-2">Changes to This Policy:</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                </div>

                <p>
                    By using our services, you agree to this Privacy Policy.
                </p>
            </div>

        </div>
    )
}

export default PrivacyPolicyPage