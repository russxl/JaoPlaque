import Nav from "@/app/component/nav";
import Banner from "@/app/component/banner";
import Footer from "@/app/component/footer";
import ImageHolder from "@/app/component/image-holder";
import Image from "next/image";
import { notFound } from "next/navigation";

const plaqueData = {
  acrylic: {
    title: "Acrylic Plaques",
    subtitle: "Premium Quality Custom Acrylic Awards",
    heading: "Custom Acrylic Excellence",
    description: "Our acrylic plaques combine elegance with durability, creating stunning recognition pieces that capture and reflect light beautifully. Each piece is precision-cut and carefully crafted to your specifications.",
    features: [
      "Crystal-clear premium acrylic material",
      "Custom shapes and sizes available",
      "Professional UV printing",
      "Polished edges for superior finish",
      "Optional standoff mounting hardware",
    ],
    sampleImages: [
      { src: "/samples/acrylic-1.jpg", alt: "Crystal clear acrylic award with elegant etching" },
      { src: "/samples/acrylic-2.jpg", alt: "Modern frosted acrylic plaque design" },
      { src: "/samples/acrylic-3.jpg", alt: "Custom shaped acrylic recognition award" },
      { src: "/samples/acrylic-4.jpg", alt: "Corporate acrylic award with logo" },
      { src: "/samples/acrylic-5.jpg", alt: "Premium acrylic plaque with standoffs" },
      { src: "/samples/acrylic-6.jpg", alt: "Illuminated acrylic award design" },
    ],
    options: [
      {
        title: "Standard Clear",
        description: "Classic transparent acrylic with crisp edges",
        price: "Starting at $79.99",
      },
      {
        title: "Frosted Edge",
        description: "Elegant frosted border with clear center",
        price: "Starting at $89.99",
      },
      {
        title: "Custom Shape",
        description: "Unique designs cut to your specifications",
        price: "Starting at $99.99",
      },
    ],
  },
  wood: {
    title: "Wooden Plaques",
    subtitle: "Timeless Wooden Recognition Awards",
    heading: "Premium Wood Craftsmanship",
    description: "Our wooden plaques showcase the natural beauty of premium hardwoods, expertly crafted to create lasting recognition pieces. Each plaque is carefully selected for grain pattern and finished to perfection.",
    features: [
      "Select hardwood materials",
      "Rich, durable finishes",
      "Custom engraving options",
      "Traditional and modern designs",
      "Multiple wood species available",
    ],
    sampleImages: [
      { src: "/samples/wood-1.jpg", alt: "Classic oak plaque with gold trim" },
      { src: "/samples/wood-2.jpg", alt: "Walnut recognition plaque" },
      { src: "/samples/wood-3.jpg", alt: "Custom engraved wooden award" },
      { src: "/samples/wood-4.jpg", alt: "Premium maple wood plaque" },
      { src: "/samples/wood-5.jpg", alt: "Traditional wooden award design" },
      { src: "/samples/wood-6.jpg", alt: "Modern wooden plaque with metal accents" },
    ],
    options: [
      {
        title: "Classic Oak",
        description: "Traditional oak with prominent grain patterns",
        price: "Starting at $89.99",
      },
      {
        title: "Rich Walnut",
        description: "Deep, luxurious color with smooth finish",
        price: "Starting at $99.99",
      },
      {
        title: "Premium Maple",
        description: "Light, elegant wood with subtle grain",
        price: "Starting at $94.99",
      },
    ],
  },
  glass: {
    title: "Glass Plaques",
    subtitle: "Elegant Glass Recognition Awards",
    heading: "Exquisite Glass Design",
    description: "Our glass plaques represent the pinnacle of elegance in recognition awards. Each piece is crafted from premium glass, featuring sophisticated etching and design elements that create a truly memorable presentation.",
    features: [
      "Premium tempered glass",
      "Precision etching and beveling",
      "Multiple thickness options",
      "Custom design capabilities",
      "Elegant mounting solutions",
    ],
    sampleImages: [
      { src: "/samples/glass-1.jpg", alt: "Elegant clear glass award" },
      { src: "/samples/glass-2.jpg", alt: "Jade glass recognition plaque" },
      { src: "/samples/glass-3.jpg", alt: "Blue tinted glass award" },
      { src: "/samples/glass-4.jpg", alt: "Etched glass plaque design" },
      { src: "/samples/glass-5.jpg", alt: "Premium beveled glass award" },
      { src: "/samples/glass-6.jpg", alt: "Custom shaped glass recognition piece" },
    ],
    options: [
      {
        title: "Classic Clear",
        description: "Traditional clear glass with beveled edges",
        price: "Starting at $109.99",
      },
      {
        title: "Jade Glass",
        description: "Elegant green tint with frosted accents",
        price: "Starting at $129.99",
      },
      {
        title: "Blue Reflection",
        description: "Stunning blue tint with polished finish",
        price: "Starting at $119.99",
      },
    ],
  },
};

export default function PlaquePage({ params }: { params: { type: string } }) {
  const type = params.type.toLowerCase();
  const data = plaqueData[type as keyof typeof plaqueData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Banner title={data.title} subtitle={data.subtitle} />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{data.heading}</h2>
            <p className="text-lg text-gray-600">{data.description}</p>
            <ul className="space-y-2 text-gray-600">
              {data.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-96">
            <ImageHolder className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Sample Designs Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.sampleImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            * These are sample designs. Each plaque can be customized to your specifications.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {type === 'wood' ? 'Wood Selection' : `${data.title.split(' ')[0]} Options`}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.options.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-900">{option.title}</h4>
                <p className="text-gray-600 mt-2">{option.description}</p>
                <p className="text-blue-600 font-semibold mt-4">{option.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 