import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";

const Index = () => {
  const [search, setSearch] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gray-200">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <Input
              placeholder="Destination"
              name="destination"
              value={search.destination}
              onChange={handleInputChange}
            />
            <Input
              type="date"
              placeholder="Check-in Date"
              name="checkIn"
              value={search.checkIn}
              onChange={handleInputChange}
            />
            <Input
              type="date"
              placeholder="Check-out Date"
              name="checkOut"
              value={search.checkOut}
              onChange={handleInputChange}
            />
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Destination {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Short description of Destination {item}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Special Offers</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                  <CardHeader>
                    <CardTitle>Special Offer {item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Description of Special Offer {item}.</p>
                    <Button>Book Now</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Customer Testimonials */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <Avatar className="mx-auto object-cover w-16 h-16" />
                <CardTitle>Customer {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Feedback from Customer {item}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;