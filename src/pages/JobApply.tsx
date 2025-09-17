import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Upload, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const JobApply = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('job');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredCountry: '',
    jobCategory: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    cv: null,
    coverLetter: '',
    whatsappOptin: false,
    emailOptin: false
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleInputChange('cv', file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-poppins font-bold mb-4">
                Application Submitted Successfully!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your application. Our recruitment team will review your profile 
                and contact you within 2-3 business days.
              </p>

              <div className="bg-muted/30 rounded-xl p-6 mb-8">
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <div className="text-left space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <span className="text-sm">Document verification & initial screening</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <span className="text-sm">Interview scheduling (phone/video)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <span className="text-sm">Job matching & employer introduction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                    <span className="text-sm">Medical, visa & travel arrangements</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/jobs">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Jobs
                  </Button>
                </Link>
                
                <a
                  href="https://wa.me/8801521217439?text=I%20just%20submitted%20my%20job%20application%20and%20would%20like%20to%20know%20more%20about%20the%20process"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-hero w-full sm:w-auto">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-poppins font-bold gradient-text mb-4">
                Job Application Form
              </h1>
              <p className="text-lg text-muted-foreground">
                Complete your application to start your global career journey
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-semibold">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone/WhatsApp Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+880 1XXX XXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Job Preferences */}
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-semibold">Job Preferences</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Preferred Country *</Label>
                      <Select value={formData.preferredCountry} onValueChange={(value) => handleInputChange('preferredCountry', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                          <SelectItem value="qatar">Qatar</SelectItem>
                          <SelectItem value="malaysia">Malaysia</SelectItem>
                          <SelectItem value="kuwait">Kuwait</SelectItem>
                          <SelectItem value="romania">Romania</SelectItem>
                          <SelectItem value="italy">Italy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Job Category *</Label>
                      <Select value={formData.jobCategory} onValueChange={(value) => handleInputChange('jobCategory', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="skilled">Skilled Worker</SelectItem>
                          <SelectItem value="semi-skilled">Semi-skilled Worker</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="fresh-graduate">Fresh Graduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Experience Level *</Label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="1-year">1+ Years</SelectItem>
                          <SelectItem value="2-years">2+ Years</SelectItem>
                          <SelectItem value="3-years">3+ Years</SelectItem>
                          <SelectItem value="5-years">5+ Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="currentSalary">Current Salary</Label>
                      <Input
                        id="currentSalary"
                        type="text"
                        value={formData.currentSalary}
                        onChange={(e) => handleInputChange('currentSalary', e.target.value)}
                        placeholder="e.g., BDT 25,000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="expectedSalary">Expected Salary</Label>
                      <Input
                        id="expectedSalary"
                        type="text"
                        value={formData.expectedSalary}
                        onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                        placeholder="e.g., SAR 2,000"
                      />
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-semibold">Documents</h3>
                  
                  <div>
                    <Label htmlFor="cv">Upload CV/Resume * (PDF, DOC, DOCX - Max 5MB)</Label>
                    <div className="mt-2 relative">
                      <input
                        id="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="cv"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/20 rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            {formData.cv ? formData.cv.name : 'Click to upload your CV'}
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      placeholder="Tell us why you're the perfect candidate for this role..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Consent & Preferences */}
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-semibold">Communication Preferences</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="whatsappOptin"
                        checked={formData.whatsappOptin}
                        onCheckedChange={(checked) => handleInputChange('whatsappOptin', checked)}
                      />
                      <Label htmlFor="whatsappOptin" className="text-sm">
                        Send me job updates and opportunities via WhatsApp
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="emailOptin"
                        checked={formData.emailOptin}
                        onCheckedChange={(checked) => handleInputChange('emailOptin', checked)}
                      />
                      <Label htmlFor="emailOptin" className="text-sm">
                        Send me job alerts and company updates via email
                      </Label>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4 mt-4">
                      <p className="text-xs text-muted-foreground">
                        By submitting this application, you agree to our{' '}
                        <Link to="/legal/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link to="/legal/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>. 
                        We are committed to protecting your personal information and will only use it for 
                        job placement and communication purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <Link to="/jobs">
                      <Button type="button" variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Jobs
                      </Button>
                    </Link>
                    
                    <Button type="submit" size="lg" className="btn-hero">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobApply;