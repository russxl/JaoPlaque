import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "../component/nav";
import Footer from "../component/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[400px] mb-16">
          <Image
            src="/about-hero.jpg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-white">About Us</h1>
            <Button variant="secondary">Learn More</Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="container py-16 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <Image
                src="/about-image1.jpg"
                alt="Our Office"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/about-image2.jpg"
                alt="Our Team"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </Card>
          </div>
        </section>

        {/* Company Description */}
        <section className="container max-w-2xl mx-auto text-center px-4 pb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <Separator className="mb-6" />
          <p className="text-lg text-muted-foreground">
            We are a dedicated team of professionals committed to delivering 
            exceptional services and products. With years of experience and 
            a passion for innovation, we strive to exceed our clients&apos; 
            expectations in every project we undertake.
          </p>
        </section>

        {/* Partners & Clients */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Partners & Clients</h2>
            <Separator className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-center justify-center">
                    <Image
                      src={`/partner${i}.png`}
                      alt={`Partner ${i}`}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
