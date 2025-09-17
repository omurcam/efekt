import React from 'react';
import { ShaderAnimation } from './components/ui/shader-animation';
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from './components/ui/image-comparison';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="p-3 bg-indigo-500/20 rounded-full mb-4 border border-indigo-500/50">
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter">Stellar AI</div>
        <div className="hidden md:flex items-center gap-8 text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors duration-300">Features</a>
          <a href="#purpose" className="hover:text-white transition-colors duration-300">Purpose</a>
          <a href="#capabilities" className="hover:text-white transition-colors duration-300">Capabilities</a>
          <a href="#workflow" className="hover:text-white transition-colors duration-300">Workflow</a>
          <a href="#showcase" className="hover:text-white transition-colors duration-300">Showcase</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
        </div>
        <button className="px-5 py-2 rounded-md bg-white text-black font-semibold hover:bg-neutral-200 transition-colors duration-300">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <ShaderAnimation />
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Next-Gen AI Effects
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 mb-8">
            Harness our cutting-edge generative models to bring your creative visions to life. Effortlessly create stunning visuals for your web projects.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-lg shadow-purple-500/30">
            Explore the Gallery
          </button>
        </div>
      </main>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Unleash Your Creativity</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-12">
            Our powerful AI tools are designed to be intuitive, flexible, and seamlessly integrated into your workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-xl flex flex-col items-start text-left">
              <FeatureIcon>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
              </FeatureIcon>
              <h3 className="text-xl font-semibold mb-2">Generative Art</h3>
              <p className="text-neutral-400">Create unique images, patterns, and textures from simple text prompts. The possibilities are endless.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-xl flex flex-col items-start text-left">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 12h4"/><path d="M10 9v6"/><path d="M17 9h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/></svg>
              </FeatureIcon>
              <h3 className="text-xl font-semibold mb-2">Dynamic Textures</h3>
              <p className="text-neutral-400">Generate seamless, high-resolution textures that can be animated and customized for any 3D model or background.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-xl flex flex-col items-start text-left">
               <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20.5 2 12l8.5-8.5"/><path d="M22 12H5.5"/></svg>
               </FeatureIcon>
              <h3 className="text-xl font-semibold mb-2">Effortless Integration</h3>
              <p className="text-neutral-400">Easily export your creations and integrate them into your favorite tools with our simple API and plugins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section id="purpose" className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Purpose</h2>
            <p className="text-lg text-neutral-400 mb-6">
              Stellar AI was born from a simple yet powerful idea: to make cutting-edge generative AI accessible to every creator. We believe that technology should be an extension of your imagination, a tool that removes barriers, not one that creates them.
            </p>
            <p className="text-lg text-neutral-400">
              Our mission is to build the most intuitive and powerful platform for generating visual content, empowering artists, designers, and developers to bring their most ambitious ideas to life with unprecedented speed and creative freedom.
            </p>
          </div>
          <div className="relative h-80 w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-700 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
            <svg className="w-40 h-40 text-purple-400 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M224 208H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v128a16 16 0 0 1-16 16Zm-25.56-56a8 8 0 0 0-8.44 1.7L160 183.18L111 105.79a8 8 0 0 0-12.91-.11l-32.22 47.8L44.24 128.5a8 8 0 0 0-12.48 4.38l-16 48a8 8 0 0 0 15.07 5l10.51-31.54l21.31 25.1a8 8 0 0 0 12.87-.06l34.61-51.13L152.1 190.3a8 8 0 0 0 12.87-.21l33.47-49.82a8 8 0 0 0-1-.11Z"/></svg>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Transform Your Vision</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-12">
            Go from a simple concept to a stunning final product. Our AI models can reimagine, enhance, and create visuals beyond imagination. See the difference for yourself.
          </p>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <ImageComparison
              className="h-[300px] md:h-[500px] w-full"
            >
              <ImageComparisonImage
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
                alt="A beautiful landscape before AI enhancement"
                position="left"
              />
              <ImageComparisonImage
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
                alt="The same landscape, transformed into a fantastical scene by AI"
                position="right"
              />
              <ImageComparisonSlider className="bg-purple-500">
                <div className="h-12 w-12 rounded-full bg-purple-500 shadow-lg flex items-center justify-center text-white ring-4 ring-black/50 backdrop-blur-sm bg-opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 17-5-5 5-5"/><path d="m15 17 5-5-5-5"/></svg>
                </div>
              </ImageComparisonSlider>
            </ImageComparison>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">A Seamless Workflow</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-16">
            Go from idea to final asset in three simple steps. Our process is designed to be fast, intuitive, and powerful.
          </p>
          <div className="max-w-2xl mx-auto">
              <div className="relative flex flex-col gap-12 pl-6">
                  {/* Connector line */}
                  <div className="absolute left-[35px] top-5 bottom-5 w-px bg-indigo-500/20 transform -translate-x-1/2"></div>
                  
                  {/* Step 1 */}
                  <div className="relative flex items-start gap-6">
                      <div className="z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-indigo-500 text-indigo-300 font-bold text-lg">1</div>
                      <div className="pt-2 text-left">
                          <h3 className="text-xl font-semibold mb-2">Describe Your Vision</h3>
                          <p className="text-neutral-400">Start with a simple text prompt, an image, or a combination of both. Be as descriptive or as abstract as you like—our AI understands natural language.</p>
                      </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex items-start gap-6">
                      <div className="z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-indigo-500 text-indigo-300 font-bold text-lg">2</div>
                      <div className="pt-2 text-left">
                          <h3 className="text-xl font-semibold mb-2">Generate & Refine</h3>
                          <p className="text-neutral-400">Our models will generate a range of options based on your input. Iterate on the results, tweak parameters, and guide the AI until you achieve the perfect outcome.</p>
                      </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative flex items-start gap-6">
                      <div className="z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-indigo-500 text-indigo-300 font-bold text-lg">3</div>
                      <div className="pt-2 text-left">
                          <h3 className="text-xl font-semibold mb-2">Export & Integrate</h3>
                          <p className="text-neutral-400">Download your creations in high-resolution formats. With our developer-friendly API and plugins, integrating assets into your website, app, or game is effortless.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">From Imagination to Reality</h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-12">See what our community has created with the power of Stellar AI.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-64 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-400 transform hover:scale-105 transition-transform duration-300"></div>
                <div className="h-64 rounded-lg bg-gradient-to-br from-purple-600 to-blue-400 transform hover:scale-105 transition-transform duration-300 col-span-1 md:col-span-2"></div>
                <div className="h-64 rounded-lg bg-gradient-to-br from-green-400 to-cyan-500 transform hover:scale-105 transition-transform duration-300"></div>
                <div className="h-64 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 transform hover:scale-105 transition-transform duration-300 col-span-1 md:col-span-2"></div>
                <div className="h-64 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-500 transform hover:scale-105 transition-transform duration-300"></div>
                <div className="h-64 rounded-lg bg-gradient-to-br from-rose-500 to-fuchsia-600 transform hover:scale-105 transition-transform duration-300"></div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Flexible Plans for Everyone</h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-12">Choose a plan that scales with your creative needs. Start for free.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Plan 1: Starter */}
                <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-xl flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                    <p className="text-4xl font-bold mb-4">$0<span className="text-lg font-normal text-neutral-400">/mo</span></p>
                    <ul className="text-neutral-300 space-y-2 mb-8 text-left">
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>10 generations/day</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Standard quality</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Community support</li>
                    </ul>
                    <button className="mt-auto w-full py-2 px-4 rounded-md bg-white text-black font-semibold hover:bg-neutral-200 transition-colors duration-300">Get Started</button>
                </div>
                {/* Plan 2: Creator (Highlighted) */}
                <div className="bg-purple-600/20 border-2 border-purple-500 p-8 rounded-xl flex flex-col relative transform scale-105">
                     <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-purple-500 px-3 py-1 text-sm font-semibold rounded-full">Most Popular</span>
                    <h3 className="text-2xl font-semibold mb-2">Creator</h3>
                    <p className="text-4xl font-bold mb-4">$15<span className="text-lg font-normal text-neutral-400">/mo</span></p>
                    <ul className="text-neutral-300 space-y-2 mb-8 text-left">
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Unlimited generations</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>HD & 4K quality</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority support</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to new models</li>
                    </ul>
                    <button className="mt-auto w-full py-2 px-4 rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:brightness-110 transition-all duration-300">Choose Creator</button>
                </div>
                {/* Plan 3: Enterprise */}
                <div className="bg-neutral-900/50 border border-white/10 p-8 rounded-xl flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                    <p className="text-4xl font-bold mb-4">Custom</p>
                    <ul className="text-neutral-300 space-y-2 mb-8 text-left">
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Volume licensing</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Dedicated models</li>
                        <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>24/7 Enterprise support</li>
                    </ul>
                    <button className="mt-auto w-full py-2 px-4 rounded-md bg-white text-black font-semibold hover:bg-neutral-200 transition-colors duration-300">Contact Us</button>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-neutral-400">&copy; 2024 Stellar AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
