import { CheckCircle, Star } from "lucide-react";
import speaker from "../assets/speaker.jpg"
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your AI-Powered English Speaking Coach
          </h2>
          <p className="text-xl mb-8">
            Speak English with Confidence – Anytime, Anywhere!
          </p>
          <img
            src={speaker}
            alt="Diverse people confidently speaking English"
            className="rounded-lg shadow-lg mb-8 mx-auto"
          />
          <h3 className="text-2xl font-semibold mb-4">
            Unlock Your English Speaking Potential
          </h3>
          <p className="text-lg mb-8">
            Are you ready to take your English speaking skills to the next
            level? Whether you're preparing for international studies, advancing
            your career, or simply want to communicate more effectively in
            English, EnglishExaminer is your personal AI coach available 24/7.
          </p>
          <Link to={"/contact"} className="bg-blue-600 p-2 rounded hover:bg-blue-700 text-white">
          Get Started
          </Link>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">
            How EnglishExaminer Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Take a 10-Minute Speaking Test: Answer questions posed by our AI in English",
              "Get Instant Feedback: Receive immediate scores and evaluations",
              "Personalized Recommendations: Get tailored advice to improve your weak areas",
              "Track Your Progress: Monitor your improvement over time",
            ].map((step, index) => (
              <div key={index} className="bg-white">
                <div className="p-6">
                  <p className="text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Diverse Question Bank: Practice with a wide range of topics and scenarios",
              "Advanced AI Technology: Our speech recognition understands and analyzes your spoken English",
              "Instant Scoring: Get immediate feedback on your performance",
              "Personalized Learning Path: Receive customized recommendations for improvement",
              "Convenient Practice: Use anytime, anywhere – all you need is an internet connection",
              "Progress Tracking: Monitor your improvement with detailed analytics",
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="benefits" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">
            Benefits of EnglishExaminer
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Build confidence in speaking English",
              "Improve fluency and pronunciation",
              "Expand your vocabulary",
              "Prepare for real-life English speaking situations",
              "Save money on expensive tutoring",
              "Practice as often as you like without judgment",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Who Can Benefit?</h3>
          <ul className="list-disc list-inside">
            <li>Students preparing to study abroad</li>
            <li>Professionals aiming to enhance their career prospects</li>
            <li>English language learners striving for fluency</li>
            <li>Anyone looking to improve their English conversation skills</li>
          </ul>
        </section>

        <section id="testimonials" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "EnglishExaminer has been a game-changer for my English speaking skills. I feel so much more confident now!",
                author: "Sarah K., Student",
              },
              {
                quote:
                  "As a business professional, I needed to improve my English quickly. EnglishExaminer's personalized approach helped me achieve my goals faster than I expected.",
                author: "Raj M., Marketing Manager",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white">
                <div className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">Get Started Today!</h3>
      
          <p className="mt-4">
            Speak English with confidence. Start your journey to fluency with
            EnglishExaminer today!
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">FAQs</h3>
          <div className="space-y-4">
            {[
              {
                q: "How accurate is the AI in assessing my English?",
                a: "Our AI uses advanced speech recognition and natural language processing, providing assessments comparable to human experts.",
              },
              {
                q: "Can I use EnglishExaminer on my mobile device?",
                a: "Yes, EnglishExaminer is available on both web and mobile platforms for your convenience.",
              },
              {
                q: "How often should I practice with EnglishExaminer?",
                a: "For best results, we recommend practicing at least 3-4 times a week, but you can use it as often as you like!",
              },
              {
                q: "Is my data secure?",
                a: "We take your privacy seriously. All your data is encrypted and securely stored in compliance with data protection regulations.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold">{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Transform Your English Speaking Skills?
          </h3>
          <p className="">
            Begin Your English Journey Now
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
