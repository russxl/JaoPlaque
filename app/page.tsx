import { Card, CardHeader, CardContent,  } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./component/nav";
import Footer from "./component/footer";


export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <div className="relative overflow-hidden py-24 lg:py-32">
        {/* Background Photo */}
        <div className="absolute inset-0 -z-10">
          <Image
           src="https://lh4.googleusercontent.com/ITiXsBe5Gp4PIQUuPojXDvu429IbnLZbO0bqvzKXVlFeBC-AOHTdnB2CLq6bfD5YLVaFJO7UyPGqQ0EUlEGmSXA=w16383"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

    
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="">Elevate your projects</p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Beautiful UI Blocks
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                  Over 10+ fully responsive, UI blocks you can drop into your
                  Shadcn UI projects and customize to your heart&apos;s content.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"}>Get started</Button>
                <Button size={"lg"} variant={"outline"}>
                  Learn more
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}



  
      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-background to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4">About Jao Plaque Awards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting excellence in recognition and celebration. We specialize in creating
              timeless awards that honor achievements and inspire greatness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wood Card */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src="/wood.jpg"
                    alt="Wood Plaque"
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Wood Plaques</h3>
                <p className="text-muted-foreground">
                  Classic and elegant, our wood plaques bring a timeless touch to any award.
                </p>
              </CardContent>
            </Card>

            {/* Acrylic Card */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src="/acrylic.jpg"
                    alt="Acrylic Plaque"
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Acrylic Plaques</h3>
                <p className="text-muted-foreground">
                  Modern and sleek, acrylic plaques offer a contemporary look for recognition.
                </p>
              </CardContent>
            </Card>

            {/* Glass Card */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src="/glass.jpg"
                    alt="Glass Plaque"
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Glass Plaques</h3>
                <p className="text-muted-foreground">
                  Sophisticated and refined, glass plaques add a touch of elegance to any occasion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    <Footer />
    
    </div>
  );
}
