"use client";

import React from "react";
import { motion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1] as const;

export default function Legal() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative w-full bg-[#020202] py-32 px-6 md:px-12 lg:px-24 flex flex-col gap-32 overflow-hidden border-t border-white/10">
      
      {/* Background Grid & Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Margin Lines */}
        <div className="absolute top-0 bottom-0 left-[32px] md:left-[23px] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute top-0 bottom-0 right-[32px] md:right-[64px] w-[1px] border-l border-dashed border-white/10" />
        
        {/* Horizontal Top & Bottom Lines */}
        <div className="absolute left-0 right-0 top-[64px] h-[1px] border-t border-dashed border-white/10" />
        <div className="absolute left-0 right-0 bottom-[0px] h-[1px] border-t border-dashed border-white/10" />

        {/* Overhanging Extensions (Horizontal & Vertical) */}
        <div className="absolute top-[64px] left-[-5%] w-[110%] h-[1px] border-t border-dashed border-white/10" />
        <div className="absolute bottom-[64px] left-[-5%] w-[110%] h-[1px] border-t border-dashed border-white/10" />
        <div className="absolute left-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />
        <div className="absolute right-0 top-[-5%] h-[110%] w-[1px] border-l border-dashed border-white/10" />

        {/* Registration Marks (+) - Top */}
        <div className="absolute top-[64px] left-[32px] md:left-[23px] w-4 h-4 -ml-2 -mt-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>
        <div className="absolute top-[64px] right-[32px] md:right-[64px] w-4 h-4 -mr-2 -mt-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>

        {/* Registration Marks (+) - Bottom */}
        <div className="absolute bottom-[64px] left-[32px] md:left-[23px] w-4 h-4 -ml-2 -mb-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>
        <div className="absolute bottom-[64px] right-[32px] md:right-[64px] w-4 h-4 -mr-2 -mb-2 flex items-center justify-center text-[#0062ff]/70 text-[10px] font-mono leading-none">+</div>

        {/* Subtle Isometric Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
      </div>

      {/* --- PRIVACY POLICY SECTION --- */}
      <motion.div 
        id="privacy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: easePremium }}
        className="relative z-10 max-w-5xl mx-auto w-full mt-8"
      >
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
          <div className="w-2 h-2 bg-[#0062ff] rounded-none animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-white">Privacy <span className="font-serif italic text-white/50">Policy.</span></h2>
          <span className="ml-auto text-[10px] font-mono tracking-widest text-white/40 uppercase">Effective Date: January 1, {currentYear}</span>
        </div>

        <div className="space-y-10 text-sm md:text-base text-white/60 font-sans leading-relaxed">
          
          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">1. Information Collection & Telemetry</h3>
            <p>
              We collect information that identifies, relates to, describes, or is reasonably capable of being associated with a particular consumer or device ("Personal Information"). This includes:
            </p>
            <div className="pl-4 border-l border-white/10 flex flex-col gap-2 mt-2 text-sm text-white/50">
              <span className="block"><strong className="text-white/70 font-normal">1.1 Direct Interactions:</strong> Information provided voluntarily via contact forms, direct email communications, or project inquiries (e.g., full name, corporate email address, project specifications).</span>
              <span className="block"><strong className="text-white/70 font-normal">1.2 Automated Telemetry:</strong> Technical data automatically collected to ensure the stability of WebGL environments and advanced UI animations. This encompasses IP addresses, browser types, device specifications, operating systems, and interaction metrics.</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">2. Processing & Utilization of Data</h3>
            <p>
              The data collected is strictly utilized for legitimate professional and operational purposes, including but not limited to:
            </p>
            <div className="pl-4 border-l border-white/10 flex flex-col gap-2 mt-2 text-sm text-white/50">
              <span className="block">Providing, maintaining, and improving the digital infrastructure of this platform.</span>
              <span className="block">Responding to professional inquiries, contract negotiations, and fulfilling requested services.</span>
              <span className="block">Detecting security incidents, protecting against malicious, deceptive, or illegal activity, and prosecuting those responsible for that activity.</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">3. Data Sharing & Third-Party Disclosure</h3>
            <p>
              We maintain a strict policy against the monetization of user data. Personal Information is never sold, traded, or rented to third-party entities. Information may be shared exclusively under the following circumstances: (a) with trusted service providers necessary for hosting, infrastructure, and analytics, bound by strict confidentiality agreements; (b) when required by law or to respond to legal process; or (c) to protect the rights, property, or safety of our infrastructure and users.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">4. Security Infrastructure</h3>
            <p>
              We implement robust, industry-standard administrative, technical, and physical safeguards designed to protect your Personal Information from unauthorized access, destruction, use, modification, or disclosure. However, no absolute guarantee of security can be provided for data transmitted over the public internet.
            </p>
          </div>

        </div>
      </motion.div>

      {/* --- TERMS OF SERVICE SECTION --- */}
      <motion.div 
        id="terms"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: easePremium, delay: 0.1 }}
        className="relative z-10 max-w-5xl mx-auto w-full pb-8"
      >
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
          <div className="w-2 h-2 bg-[#0062ff] rounded-none" />
          <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-white">Terms of <span className="font-serif italic text-white/50">Service.</span></h2>
          <span className="ml-auto text-[10px] font-mono tracking-widest text-white/40 uppercase">v 2.1.0</span>
        </div>

        <div className="space-y-10 text-sm md:text-base text-white/60 font-sans leading-relaxed">
          
          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">1. Acceptance of Terms & Conditions</h3>
            <p>
              By accessing, browsing, or utilizing this digital portfolio and its associated subsystems ("Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you are explicitly prohibited from accessing or using the Platform.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">2. Intellectual Property Rights & Licensing</h3>
            <p>
              The Platform and its original content, features, and functionality are the exclusive intellectual property of Kalpesh Suthar. This includes, but is not limited to:
            </p>
            <div className="pl-4 border-l border-white/10 flex flex-col gap-2 mt-2 text-sm text-white/50">
              <span className="block"><strong className="text-white/70 font-normal">2.1 Source Architecture:</strong> All proprietary React/Next.js component structures, database schemas, and animation logic.</span>
              <span className="block"><strong className="text-white/70 font-normal">2.2 Visual Assets:</strong> All bespoke UI/UX designs, 3D/WebGL renders, hyper-realistic AI-generated media, and typography configurations.</span>
            </div>
            <p className="mt-2">
              You are granted a limited, non-exclusive, non-transferable, and revocable license to access the Platform strictly for personal, non-commercial evaluation of professional capabilities. Direct cloning, unauthorized distribution, reverse-engineering, or commercial repackaging of the design system or source code without express written consent is a violation of copyright law.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">3. Prohibited Conduct</h3>
            <p>
              Users of the Platform agree not to engage in any of the following activities:
            </p>
            <div className="pl-4 border-l border-white/10 flex flex-col gap-2 mt-2 text-sm text-white/50">
              <span className="block">Deploying automated scripts, scrapers, spiders, or other programmatic methodologies to extract proprietary code or data.</span>
              <span className="block">Attempting to probe, scan, or test the vulnerability of the system network, or breaching security or authentication measures.</span>
              <span className="block">Utilizing the visual aesthetic or code structure to create a derivative competing portfolio or commercial product.</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">4. Disclaimer of Warranties (As-Is Clause)</h3>
            <p>
              THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT THE PLATFORM WILL MEET YOUR REQUIREMENTS, OR THAT ACCESS WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">5. Limitation of Liability</h3>
            <p>
              In no event shall the owner, developers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Platform; (ii) any conduct or content of any third party on the Platform; or (iii) unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white/90 font-medium font-mono text-xs uppercase tracking-widest">6. Governing Law & Jurisdiction</h3>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Vadodara, Gujarat, India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or local courts located in Vadodara, Gujarat, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.
            </p>
          </div>
          
          <div className="pt-12 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
              Official Legal Inquiries:
            </p>
            <a href="mailto:kalpeshsuthar.work247@gmail.com" className="font-mono text-sm text-white hover:text-[#0062ff] transition-colors border border-white/10 px-6 py-3 rounded-sm bg-white/5 hover:bg-white/10">
              kalpeshsuthar.work247@gmail.com
            </a>
          </div>

        </div>
      </motion.div>

    </section>
  );
}