
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Synergy School System</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to nurturing young minds and shaping future leaders through excellence in education
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  To provide quality education that empowers students to become confident, creative, and responsible global citizens. 
                  We strive to create an environment where every student can discover their potential and achieve academic excellence 
                  while developing strong moral values and character.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  To be recognized as a leading educational institution that sets the standard for academic excellence, 
                  innovation in teaching, and holistic student development. We envision a future where our graduates 
                  become leaders who contribute positively to society and make a meaningful impact on the world.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 1999, Synergy School System began with a simple yet profound vision: to create an educational 
                environment where every child could thrive and reach their full potential. What started as a small institution 
                with just 50 students has grown into one of the most respected schools in the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have continuously evolved our teaching methodologies, upgraded our facilities, and expanded 
                our programs to meet the changing needs of modern education. Our commitment to excellence has earned us numerous 
                accolades and the trust of thousands of families.
              </p>
              <p className="text-lg text-gray-600">
                Today, we stand proud as an institution that not only imparts knowledge but also shapes character, builds 
                confidence, and prepares students for the challenges of tomorrow.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3" 
                alt="School campus" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Synergy School System
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description: "We uphold the highest standards of honesty, ethics, and moral character in all our interactions."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of teamwork and foster a collaborative learning environment."
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from teaching to student development."
              },
              {
                icon: Award,
                title: "Innovation",
                description: "We embrace new ideas and innovative approaches to enhance the learning experience."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to enhance the learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3",
                title: "Modern Classrooms",
                description: "Smart boards, air conditioning, and ergonomic furniture for optimal learning"
              },
              {
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3",
                title: "Science Laboratories",
                description: "Fully equipped labs for physics, chemistry, biology, and computer science"
              },
              {
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3",
                title: "Sports Complex",
                description: "Indoor and outdoor facilities for cricket, football, basketball, and more"
              }
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{facility.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
