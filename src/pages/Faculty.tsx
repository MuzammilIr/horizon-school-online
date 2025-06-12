
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      qualifications: "Ph.D. in Educational Leadership, M.Ed. in Curriculum Development",
      experience: "25 years",
      email: "sarah.johnson@synergyschool.edu",
      phone: "+92 332 0565753",
      image: "https://images.unsplash.com/photo-1494790108755-2616c95b2a5c?ixlib=rb-4.0.3",
      specialization: "Educational Leadership, Curriculum Development"
    },
    {
      name: "Mr. Ahmed Khan",
      position: "Vice Principal",
      department: "Academic Affairs",
      qualifications: "M.Sc. in Mathematics, B.Ed.",
      experience: "20 years",
      email: "ahmed.khan@synergyschool.edu",
      phone: "+92 332 0565754",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      specialization: "Mathematics, Academic Administration"
    },
    {
      name: "Ms. Emily Davis",
      position: "Head of English Department",
      department: "Languages",
      qualifications: "M.A. in English Literature, TESOL Certification",
      experience: "15 years",
      email: "emily.davis@synergyschool.edu",
      phone: "+92 332 0565755",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      specialization: "English Literature, Creative Writing"
    },
    {
      name: "Dr. Michael Chen",
      position: "Head of Science Department",
      department: "Sciences",
      qualifications: "Ph.D. in Physics, M.Sc. in Applied Physics",
      experience: "18 years",
      email: "michael.chen@synergyschool.edu",
      phone: "+92 332 0565756",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      specialization: "Physics, Research Methodology"
    },
    {
      name: "Ms. Fatima Ali",
      position: "Head of Mathematics Department",
      department: "Mathematics",
      qualifications: "M.Phil. in Mathematics, B.Ed.",
      experience: "12 years",
      email: "fatima.ali@synergyschool.edu",
      phone: "+92 332 0565757",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3",
      specialization: "Advanced Mathematics, Statistics"
    },
    {
      name: "Mr. Robert Wilson",
      position: "Sports Coordinator",
      department: "Physical Education",
      qualifications: "M.S. in Sports Science, Coaching Certification",
      experience: "10 years",
      email: "robert.wilson@synergyschool.edu",
      phone: "+92 332 0565758",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      specialization: "Athletic Training, Sports Psychology"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Distinguished Faculty</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of dedicated educators who are committed to providing exceptional learning experiences
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Excellence in Teaching</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our faculty comprises highly qualified and experienced educators who are passionate about teaching 
                and committed to student success. Each member brings unique expertise and innovative teaching methods 
                to create an engaging and effective learning environment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With advanced degrees from prestigious institutions and years of practical experience, our teachers 
                not only deliver academic content but also serve as mentors, guiding students toward personal and 
                professional growth.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-sm text-gray-600">With Master's Degrees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Average Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3" 
                alt="Faculty meeting" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Faculty Members */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the experienced educators who lead our academic departments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.position}</CardDescription>
                  <Badge variant="secondary" className="w-fit">{member.department}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700">Qualifications:</h4>
                    <p className="text-sm text-gray-600">{member.qualifications}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700">Specialization:</h4>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-600">{member.experience} experience</span>
                  </div>
                  <div className="pt-3 border-t space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{member.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive academic departments ensure excellence across all subjects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                department: "English & Literature",
                faculty: "15 Teachers",
                description: "Creative writing, literature analysis, and communication skills"
              },
              {
                department: "Mathematics",
                faculty: "12 Teachers",
                description: "Pure mathematics, applied mathematics, and statistics"
              },
              {
                department: "Sciences",
                faculty: "18 Teachers",
                description: "Physics, chemistry, biology, and computer science"
              },
              {
                department: "Social Studies",
                faculty: "10 Teachers",
                description: "History, geography, economics, and civic studies"
              }
            ].map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{dept.department}</CardTitle>
                  <CardDescription className="font-semibold">{dept.faculty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{dept.description}</p>
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

export default Faculty;
