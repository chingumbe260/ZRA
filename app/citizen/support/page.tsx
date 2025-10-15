import { CitizenHeader } from "@/components/citizen-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageSquare, FileQuestion, Clock, Search, HelpCircle, BookOpen, Video } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <CitizenHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Support Center</h1>
          <p className="text-muted-foreground">Get help with your government services and applications</p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:border-primary/50 transition-all">
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>Speak with a support agent</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-1">+260 211 123 456</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Send us your inquiry</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-1">support@gov.zm</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with an agent now</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submit Support Ticket */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5 text-primary" />
                  Submit a Support Ticket
                </CardTitle>
                <CardDescription>Describe your issue and our team will assist you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select id="category" className="w-full bg-background border-input rounded-md px-3 py-2">
                    <option>Select a category</option>
                    <option>Account Access</option>
                    <option>Application Status</option>
                    <option>Payment Issues</option>
                    <option>Document Verification</option>
                    <option>Technical Issues</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide detailed information about your issue..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachment">Attachment (Optional)</Label>
                  <Input id="attachment" type="file" />
                  <p className="text-xs text-muted-foreground">Max file size: 5MB</p>
                </div>

                <Button className="w-full">Submit Ticket</Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ and Resources */}
          <div className="space-y-6">
            {/* Search FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Search FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search for answers..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Frequently Asked Questions
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  User Guides
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  Video Tutorials
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Service Status
                </Button>
              </CardContent>
            </Card>

            {/* Popular Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#" className="block text-sm text-primary hover:underline">
                  How to verify my identity?
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  Tracking application status
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  Payment methods accepted
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  Document requirements
                </a>
                <a href="#" className="block text-sm text-primary hover:underline">
                  Account security tips
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
