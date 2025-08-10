import React from 'react';

// Main Landing Page Component
const LandingPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Header Section */}
            <header className="py-6 bg-blue-600 text-white">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">GoCohort</h1>
                    <nav className="space-x-4">
                        <a href="#features" className="hover:underline">Features</a>
                        <a href="#pricing" className="hover:underline">Pricing</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-blue-100 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Unlock Your Marketing Potential with AI</h2>
                    <p className="text-lg md:text-xl mb-8">Create stunning ads, landing pages, and creatives effortlessly.</p>
                    <a href="#" className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">Get Started</a>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-8 text-center">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Item */}
                        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h4 className="text-xl font-semibold mb-2">AI-Powered Ads</h4>
                            <p>Generate high-converting ads with minimal effort using our AI tools.</p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h4 className="text-xl font-semibold mb-2">Creative Templates</h4>
                            <p>Easily customize templates that suit your brand's voice and style.</p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h4 className="text-xl font-semibold mb-2">Landing Page Builder</h4>
                            <p>Create landing pages that convert visitors into customers seamlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-8 text-center">Pricing Plans</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Pricing Card */}
                        <div className="p-6 border rounded-lg shadow-lg text-center">
                            <h4 className="text-xl font-semibold mb-2">Basic Plan</h4>
                            <p className="text-lg font-bold mb-4">$19/month</p>
                            <p>Access to basic features and templates.</p>
                            <a href="#" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Choose Plan</a>
                        </div>
                        <div className="p-6 border rounded-lg shadow-lg text-center">
                            <h4 className="text-xl font-semibold mb-2">Pro Plan</h4>
                            <p className="text-lg font-bold mb-4">$49/month</p>
                            <p>Includes all features and premium templates.</p>
                            <a href="#" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Choose Plan</a>
                        </div>
                        <div className="p-6 border rounded-lg shadow-lg text-center">
                            <h4 className="text-xl font-semibold mb-2">Enterprise Plan</h4>
                            <p className="text-lg font-bold mb-4">Contact Us</p>
                            <p>Custom solutions tailored for your business needs.</p>
                            <a href="#" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                    <p className="mb-8">Have questions? We would love to hear from you!</p>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg" required />
                        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg" required />
                        <textarea placeholder="Your Message" className="w-full p-2 border rounded-lg" required></textarea>
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-600 text-white py-6 text-center">
                <p>&copy; 2023 GoCohort. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;