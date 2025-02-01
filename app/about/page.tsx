import Image from 'next/image';
import Navbar from "../component/nav";
import Footer from "../component/footer";
import Banner from "../component/banner";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1">
        <Banner 
          title="About JAO Plaques" 
          subtitle="Crafting Excellence in Recognition Awards Since 1995" 
        />

        {/* Mission and Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  At JAO Plaques, we are dedicated to creating exceptional recognition awards that celebrate 
                  achievements and milestones. Our commitment to quality craftsmanship and innovative design 
                  has made us a trusted partner for organizations worldwide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                    <p className="text-gray-600">Premium materials and meticulous attention to detail in every piece</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">Cutting-edge design and manufacturing techniques</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/about/workshop.jpg"
                  alt="Our Workshop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design",
                  description: "Collaborate with our expert designers to create your perfect award",
                  icon: "✏️",
                },
                {
                  title: "Craft",
                  description: "Skilled artisans bring your vision to life with precision",
                  icon: "🛠️",
                },
                {
                  title: "Deliver",
                  description: "Carefully packaged and delivered to exceed expectations",
                  icon: "📦",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "John Anderson",
                  role: "Master Craftsman",
                  image: "/about/team1.jpg",
                },
                {
                  name: "Sarah Chen",
                  role: "Lead Designer",
                  image: "/about/team2.jpg",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Production Manager",
                  image: "/about/team3.jpg",
                },
                {
                  name: "Emily Taylor",
                  role: "Client Relations",
                  image: "/about/team4.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications and Awards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="relative h-20">
                    <Image
                      src={`/about/cert${i}.png`}
                      alt={`Certification ${i}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Custom Award?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s work together to design the perfect recognition piece for your achievement.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
