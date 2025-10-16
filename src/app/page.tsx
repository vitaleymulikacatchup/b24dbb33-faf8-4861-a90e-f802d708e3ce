"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [{"id":"hero-image","url":"https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern office workspace - Photo by Jakub Zerdzicki"},{"id":"about-image","url":"https://images.pexels.com/photos/6476255/pexels-photo-6476255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A diverse team of young professionals working on a business strategy in an urban office setting."},{"id":"feature-image-1","url":"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up of a hand with a pen analyzing data on colorful bar and line charts on paper."}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="SaaS Platform" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Platform"
            description="Create beautiful, responsive web experiences"
            imageSrc={(assetMap.find(a => a.id === 'hero-image')?.url) ?? '/public/images/placeholder.webp'}
            buttons={[
              { text: "Get Started", href: "about" },
              { text: "Learn More", href: "features" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "Our mission is to empower teams to create exceptional digital experiences.",
              "Explore our platform's unique features."
            ]}
            buttons={[{ text: "Our Story", href: "story" }]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            title="Features"
            features={[
              {
                id: "01",
                title: "Advanced Analytics",
                description: "Track performance with detailed insights",
                imageSrc:(assetMap.find(a => a.id === 'feature-image-1')?.url) ?? '/public/images/placeholder.webp'
              },
              {
                id: "02",
                title: "Collaborative Tools",
                description: "Enhance teamwork and efficiency",
                imageSrc:(assetMap.find(a => a.id === 'feature-image-1')?.url) ?? '/public/images/placeholder.webp'
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Contact Us"
            description="We are here to assist you with any questions."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", required: true }}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [
                { label: "About", href: "about" },
                { label: "Features", href: "features" }
              ]},
              { items: [
                { label: "Contact", href: "contact" },
                { label: "Privacy", href: "privacy" }
              ]}
            ]}
            logoText="SaaS Platform"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
