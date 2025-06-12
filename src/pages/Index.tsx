
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Trophy, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionPopup from "@/components/AdmissionPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AdmissionPopup />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering
                <span className="text-primary block">Future Leaders</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Synergy School System, we nurture young minds through innovative teaching methods, 
                state-of-the-art facilities, and a commitment to excellence in education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                  <Link to="/admissions">Apply for Admission</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3" 
                alt="Students learning" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Synergy School?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive educational experience that prepares students for success in an ever-changing world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Highly qualified teachers dedicated to student success"
              },
              {
                icon: BookOpen,
                title: "Modern Curriculum",
                description: "Updated programs aligned with global educational standards"
              },
              {
                icon: Trophy,
                title: "Excellence in Sports",
                description: "Comprehensive sports programs for physical development"
              },
              {
                icon: Star,
                title: "Outstanding Results",
                description: "Consistent academic achievements and university placements"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3" 
                alt="School building" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Building Tomorrow's Leaders Today</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over two decades, Synergy School System has been at the forefront of educational excellence, 
                providing students with the knowledge, skills, and values they need to succeed in life.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art facilities, innovative teaching methods, and commitment to holistic development 
                make us the preferred choice for parents seeking quality education for their children.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2000+", label: "Students" },
              { number: "150+", label: "Faculty Members" },
              { number: "25+", label: "Years of Excellence" },
              { number: "95%", label: "University Admission Rate" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
