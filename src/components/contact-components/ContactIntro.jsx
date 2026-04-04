import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact-components/ContactForm";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 px-6 md:px-20">

        {/* Left Content */}
        <div className="lg:col-span-2 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-black mb-4 relative inline-block">
            Get In Touch
            <span className="absolute left-0 -bottom-2 w-72 h-1.5 bg-[#3AA7C2]"></span>
          </h2>

          <h3 className="text-xl font-bold text-gray-600 mb-4">
            We’d love to hear from you!
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Have questions about our HR services or need professional workforce
            solutions? Our team is ready to assist you.
          </p>

          <div className="space-y-8 text-gray-700">

            <div>
              <p className="font-bold mb-4 text-gray-500">Reach Us</p>

              <div className="flex items-center space-x-3 mb-4 font-semibold text-black">
                <Phone className="text-[#3AA7C2] w-5 h-5" />
                <span>+91-9445393068 | +91-9080175318</span>
              </div>

              <div className="flex items-center space-x-3 font-semibold text-black">
                <Mail className="text-[#3AA7C2] w-5 h-5" />
                <span>Email: hr@ghrt.in</span>
              </div>
            </div>

            <div>
              <p className="font-bold mb-4 text-gray-500">Our Presence</p>
              <div className="flex items-start space-x-3 font-semibold text-black">
                <MapPin className="text-[#3AA7C2] w-5 h-5 mt-1" />
                <div>
                  <p className="mb-2">No 13 MIC, TNHB, Keelakaranai, </p>
                  <p className="mb-2">Maraimalai Nagar, Chennai 602204</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-4 text-gray-500">Business Hours</p>
              <div className="flex items-start space-x-3 font-semibold text-black">
                <Clock className="text-[#3AA7C2] w-5 h-5 mt-1" />
                <div>
                  <p className="mb-2">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-3 flex items-center">
          <ContactForm />
        </div>

      </div>

    </section>
  );
}