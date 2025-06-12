
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Calendar, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    address: "",
    desiredClass: "",
    previousSchool: "",
    reasonForJoining: "",
    agreeToTerms: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Application Submitted!",
      description: "Thank you for your application. We'll review it and contact you soon.",
    });
    // Reset form
    setFormData({
      studentName: "",
      dateOfBirth: "",
      gender: "",
      fatherName: "",
      motherName: "",
      email: "",
      phone: "",
      address: "",
      desiredClass: "",
      previousSchool: "",
      reasonForJoining: "",
      agreeToTerms: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community of learners and embark on a journey of academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to secure your child's future at Synergy School System
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: FileText,
                title: "Submit Application",
                description: "Fill out the online application form with required documents"
              },
              {
                icon: Calendar,
                title: "Entrance Test",
                description: "Appear for the entrance examination and interview"
              },
              {
                icon: Users,
                title: "Parent Meeting",
                description: "Meet with the admission committee and school counselors"
              },
              {
                icon: Award,
                title: "Enrollment",
                description: "Complete enrollment process and begin your academic journey"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Student Admission Application</CardTitle>
              <CardDescription className="text-center text-lg">
                Please fill out all required fields accurately. Incomplete applications will not be processed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Student Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary">Student Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentName">Student Full Name *</Label>
                      <Input
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="desiredClass">Desired Class for Admission *</Label>
                      <Select onValueChange={(value) => handleSelectChange("desiredClass", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Class 1</SelectItem>
                          <SelectItem value="2">Class 2</SelectItem>
                          <SelectItem value="3">Class 3</SelectItem>
                          <SelectItem value="4">Class 4</SelectItem>
                          <SelectItem value="5">Class 5</SelectItem>
                          <SelectItem value="6">Class 6</SelectItem>
                          <SelectItem value="7">Class 7</SelectItem>
                          <SelectItem value="8">Class 8</SelectItem>
                          <SelectItem value="9">Class 9</SelectItem>
                          <SelectItem value="10">Class 10</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary">Parent/Guardian Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fatherName">Father's Full Name *</Label>
                      <Input
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="motherName">Mother's Full Name *</Label>
                      <Input
                        id="motherName"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="address">Home Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary">Academic Information</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="previousSchool">Previous School (if any)</Label>
                      <Input
                        id="previousSchool"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Name of previous school"
                      />
                    </div>
                    <div>
                      <Label htmlFor="reasonForJoining">Why do you want to join Synergy School System? *</Label>
                      <Textarea
                        id="reasonForJoining"
                        name="reasonForJoining"
                        value={formData.reasonForJoining}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Please share your reasons for choosing our school..."
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, agreeToTerms: checked as boolean })
                      }
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      I agree to the terms and conditions and understand that providing false information 
                      may result in rejection of the application. *
                    </Label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Birth certificate (original and photocopy)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Previous school records/transcripts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Immunization records</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Passport-size photographs (4 copies)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Parent/Guardian ID copies</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Dates</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg">Application Deadline</h3>
                  <p className="text-gray-600">March 31, 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg">Entrance Exam</h3>
                  <p className="text-gray-600">April 15-20, 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg">Results Announcement</h3>
                  <p className="text-gray-600">April 30, 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg">Enrollment Period</h3>
                  <p className="text-gray-600">May 1-15, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
