"use client";
import Navbar from '../component/nav';
import Footer from '../component/footer';
import { FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const contactInfo = {
  facebook: "https://facebook.com/yourstore",
  phone: "+1 (123) 456-7890",
  email: "contact@yourstore.com",
  address: "123 Store Street, City, Country, 12345",
  mapUrl: "https://www.google.com/maps/embed/v1/place?q=jao+plaque&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
};

export default function Contact() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar/>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-bold mb-4 mt-20">Contact Us</h1>
          <p className="text-muted-foreground">Get in touch with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Facebook */}
                <div className="flex items-center space-x-4">
                  <Button size="icon" className="rounded-full">
                    <FaFacebook className="w-5 h-5" />
                  </Button>
                  <div>
                    <p className="text-sm text-muted-foreground">Follow us on Facebook</p>
                    <Button variant="link" className="h-auto p-0" asChild>
                      <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer">
                        @yourstore
                      </a>
                    </Button>
                  </div>
                </div>
                <Separator />

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <Button size="icon" className="rounded-full">
                    <FaPhone className="w-5 h-5" />
                  </Button>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <Button variant="link" className="h-auto p-0" asChild>
                      <a href={`tel:${contactInfo.phone}`}>
                        {contactInfo.phone}
                      </a>
                    </Button>
                  </div>
                </div>
                <Separator />

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <Button size="icon" className="rounded-full">
                    <FiMail className="w-5 h-5" />
                  </Button>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <Button variant="link" className="h-auto p-0" asChild>
                      <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </Button>
                  </div>
                </div>
                <Separator />

                {/* Address */}
                <div className="flex items-center space-x-4">
                  <Button size="icon" className="rounded-full">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </Button>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit our store</p>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Store Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <Separator />
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <Separator />
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden">
            <iframe
              src={contactInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </main>

        <Footer />

    </div>
  );
} 