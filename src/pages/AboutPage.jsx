
import React from 'react';
import { User, Code, MapPin, GraduationCap, Award, Activity, Heart } from 'lucide-react';
import { 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiGreensock,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb
} from 'react-icons/si';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <User className="text-red-600 mx-auto mb-4" size={56} />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hi, I'm Chandan Adhikari - A passionate developer from the beautiful hills of Uttarakhand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="text-red-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600 leading-relaxed">
              Currently studying in <span className="font-semibold">Class 10th</span>, I'm balancing my 
              academics with my passion for web development. Learning and building projects is what drives me forward.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-blue-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm from <span className="font-semibold">Ramnagar, Uttarakhand</span> - a beautiful place 
              surrounded by nature that inspires me to create beautiful and functional web experiences.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl shadow-2xl p-12 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">My Skills</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <SiJavascript className="mx-auto mb-3" size={40} />
              <p className="text-red-100 font-semibold">JavaScript</p>
            </div>
            <div>
              <SiReact className="mx-auto mb-3" size={40} />
              <p className="text-red-100 font-semibold">ReactJS</p>
            </div>
            <div>
              <SiTailwindcss className="mx-auto mb-3" size={40} />
              <p className="text-red-100 font-semibold">TailwindCSS</p>
            </div>
            <div>
              <SiGreensock className="mx-auto mb-3" size={40} />
              <p className="text-red-100 font-semibold">GSAP</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-2 mb-3">
                <SiHtml5 size={40} />
                <SiCss3 size={40} />
              </div>
              <p className="text-red-100 font-semibold">HTML & CSS</p>
            </div>
            <div>
              <SiNodedotjs className="mx-auto mb-3" size={40} />
              <p className="text-red-100 font-semibold">Node.js</p>
            </div>
            <div>
              <SiMongodb className="mx-auto mb-3" size={40} />
              <p className="text-red-100 font-semibold">MongoDB</p>
              <p className="text-red-200 text-xs mt-1">(Learning)</p>
            </div>
            <div>
              <Code className="mx-auto mb-3 text-white" size={40} />
              <p className="text-red-100 font-semibold">Full Stack</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <Activity className="text-green-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Frontend Development</h3>
            <p className="text-gray-600 text-sm">
              Building responsive and interactive user interfaces with ReactJS, TailwindCSS, and GSAP animations
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <Award className="text-purple-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
            <p className="text-gray-600 text-sm">
              Always eager to learn new technologies and improve my skills in web development
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <Heart className="text-red-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Passionate Developer</h3>
            <p className="text-gray-600 text-sm">
              Creating meaningful projects that solve real-world problems and make a difference
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;