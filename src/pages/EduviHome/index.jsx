import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Img,
  Text,
  SelectBox,
  Input,
  Heading,
  RatingBar,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import introVideo from "../../videos/introvideo.mp4"; // Assuming you have a styles.css for custom styles

export default function EduviHomePage() {
  return (
    <>
      <Helmet>
        <title>EduVista</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
        </div>
      </div>
      <video width="100%" height="450" controls loop>
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-row">
        <div className="flex flex-col items-left justify-start w-full py-8 px-10">
          <div className="bg-gray-100 justify-start p-5 max-w-xl rounded-lg">
            <Text className="flex w-full text-black text-2xl p-10 font-black leading-9">
              Wondering why EduVista is best of all? Here know why
            </Text>
            <div className="flex flex-col items-center justify-start w-full gap-2.5 pl-10 pb-6">
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Online EduVista Book shop
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Top Quality Content
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[80%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Highly Qualified Mentors
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Flexible Learning Options
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Good quality content at cheap price
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-left justify-start w-full py-8 px-10">
          <div className="bg-gray-100 justify-start p-9 max-w-xl rounded-lg">
            <Text className="flex w-full text-black text-2xl p-10 font-black leading-10">
              Learning focused on your Goals
            </Text>
            <div className="flex flex-col items-center justify-start w-full gap-2.5 pl-10 pb-6">
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Hands-on training
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Certificate Prep
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[80%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Insights and analytics
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Customizable content
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Good quality content at cheap price
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-left justify-between w-full py-8 px-10">
          <div className="bg-gray-100 justify-between p-10 max-w-xl rounded-lg">
            <Text className="flex w-full text-black text-2xl p-10 font-black leading-9">
              All the skills you required are in One place!!
            </Text>
            <div className="flex flex-col items-center justify-start w-full gap-2.5 pl-10 pb-6">
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Scholastic courses
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Highschool Courses
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[80%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Undergrad lectured
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                <Text as="p" className="mt-[3px] !text-gray-900">
                  Postgrad Lectures
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Accelerate growth – for you or your organization
      </h2>
      <p className="text-center mb-10">
        Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 ">
        <div className="border rounded-lg p-6 hover:scale-110 transition-all duration-500 cursor-pointer">
          <h3 className="text-xl font-bold mb-4">Personal Plan</h3>
          <p className="text-sm text-gray-500 mb-2">For you</p>
          <p className="text-lg font-semibold mb-6">Starting at ₹850 per month</p>
          
          <button className="w-full bg-black text-white py-2 rounded-lg mb-4">Start subscription</button>
          <ul className="text-sm">
            <li className="mb-2">✅ Access to 11,000+ top courses</li>
            <li className="mb-2">✅ Certification prep</li>
            <li className="mb-2">✅ Goal-focused recommendations</li>
            <li>✅ AI-powered coding exercises</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 hover:scale-110 transition-all duration-500 cursor-pointer">
          <h3 className="text-xl font-bold mb-4">Team Plan</h3>
          <p className="text-sm text-gray-500 mb-2">For your team</p>
          <p className="text-lg font-semibold mb-6">₹1,167 a month per user</p>
          <button className="w-full bg-black text-white py-2 rounded-lg mb-4">Start subscription</button>
          <ul className="text-sm">
            <li className="mb-2">✅ Access to 11,000+ top courses</li>
            <li className="mb-2">✅ Certification prep</li>
            <li className="mb-2">✅ Goal-focused recommendations</li>
            <li className="mb-2">✅ AI-powered coding exercises</li>
            <li>✅ Analytics and adoption reports</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 hover:scale-110 transition-all duration-500 cursor-pointer">
          <h3 className="text-xl font-bold mb-4">Enterprise Plan</h3>
          <p className="text-sm text-gray-500 mb-2">For your whole organization</p>
          <p className="text-lg font-semibold mb-6">Contact sales for pricing</p>
          <button className="w-full bg-black text-white py-2 rounded-lg mb-4">Request a demo</button>
          <ul className="text-sm">
            <li className="mb-2">✅ Access to 25,000+ top courses</li>
            <li className="mb-2">✅ Certification prep</li>
            <li className="mb-2">✅ Goal-focused recommendations</li>
            <li className="mb-2">✅ AI-powered coding exercises</li>
            <li className="mb-2">✅ Advanced analytics and insights</li>
            <li className="mb-2">✅ Dedicated customer success team</li>
            <li className="mb-2">✅ International course collection featuring 15 languages</li>
            <li className="mb-2">✅ Customizable content</li>
            <li className="mb-2">✅ Hands-on tech training with add-on</li>
            <li>✅ Strategic implementation services with add-on</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="pt-14 container mx-auto py-8 pl-9 pr-12 pb-16">
      <h1 className="text-3xl font-bold mb-6">Popular courses that Learners are viewing</h1>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="border rounded-lg p-4 shadow-md bg-white hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg" alt="100 Days of Code: The Complete Python Pro Bootcamp" className="w-full h-40 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">100 Days of Code: The Complete Python Pro Bootcamp</h3>
            <p className="text-gray-500">Dr. Angela Yu</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">4.7 ★</span>
              <span className="ml-2 text-gray-600">(295,575)</span>
            </div>
            <div className="mt-2">
              <span className="text-lg font-semibold text-green-600">₹399</span>
              <span className="text-gray-500 line-through ml-2">₹3,099</span>
            </div>
            <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded">Bestseller</span>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow-md bg-white hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_12.jpg" alt="The Complete 2024 Web Development Bootcamp" className="w-full h-40 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">The Complete 2024 Web Development Bootcamp</h3>
            <p className="text-gray-500">Dr. Angela Yu</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">4.7 ★</span>
              <span className="ml-2 text-gray-600">(376,928)</span>
            </div>
            <div className="mt-2">
              <span className="text-lg font-semibold text-green-600">₹399</span>
              <span className="text-gray-500 line-through ml-2">₹3,999</span>
            </div>
            <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded">Bestseller</span>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow-md bg-white hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg" alt="The Complete Python Bootcamp From Zero to Hero in Python" className="w-full h-40 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">The Complete Python Bootcamp From Zero to Hero in Python</h3>
            <p className="text-gray-500">Jose Portilla</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">4.6 ★</span>
              <span className="ml-2 text-gray-600">(505,107)</span>
            </div>
            <div className="mt-2">
              <span className="text-lg font-semibold text-green-600">₹399</span>
              <span className="text-gray-500 line-through ml-2">₹3,099</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow-md bg-white hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://img-b.udemycdn.com/course/240x135/2196488_8fc7_10.jpg" alt="Ultimate AWS Certified Solutions Architect Associate SAA-C03" className="w-full h-40 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Ultimate AWS Certified Solutions Architect Associate SAA-C03</h3>
            <p className="text-gray-500">Stephane Maarek</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">4.7 ★</span>
              <span className="ml-2 text-gray-600">(222,645)</span>
            </div>
            <div className="mt-2">
              <span className="text-lg font-semibold text-green-600">₹399</span>
              <span className="text-gray-500 line-through ml-2">₹3,999</span>
            </div>
            <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded">Bestseller</span>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-20 container mx-auto py-8 pb-20">
      <p className="text-center text-gray-600 mb-8 text-2xl underline">
        Trusted by over 15,000 companies and millions of learners around the world
      </p>
      <div className="grid grid-cols-8 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center">
        <img src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals" alt="Volkswagen" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
        <img src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals" alt="Samsung" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
        <img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals" alt="Cisco" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
        <img src="https://cms-images.udemycdn.com/content/ocud9ia7cf/svg/vimeo_logo.svg?position=c&quality=80&x.app=portals" alt="Vimeo" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
        <img src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals" alt="P&G" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=1&h=37" alt="Hewlett Packard Enterprise" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
        <img src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals" alt="Citi" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=1&h=37" alt="Ericsson" className="mx-auto hover:scale-150 transition-all duration-500 cursor-pointer" />
      </div>
    </div>
    <div className="pt-20 container mx-auto p-4 pb-20 ">
      <h1 className="text-3xl font-bold mb-4 justify-center align-middle pl-2 pb-10">Find the right degree for you from some of the prestigious universitites</h1>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-8 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/IHNuNEKZnmjtOs3g6uX9h/c0038feefd8e96515ab88ee67e1bb59f/Square_logo_for_partner_landing_page.png?auto=format%2Ccompress&dpr=1" alt="IIT Guwahati logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Indian Institute of Technology Guwahati</h2>
          <p className="text-gray-600">Bachelor of Science in Data Science & AI</p>
          <p className="text-gray-500">Ranked 7th among India's top engineering institutes, according to NIRF 2023</p>
          <p className="text-gray-400">Application due May 20, 2024</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5WVyYON4icQJuoFQfLYBM5/2e5aa47d543e59637cb208563b9fb373/BITS_Emblem.png?auto=format%2Ccompress&dpr=1" alt="BITS Pilani logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Birla Institute of Technology & Science, Pilani</h2>
          <p className="text-gray-600">Bachelor of Science in Computer Science</p>
          <p className="text-gray-500">Accredited by the National Assessment & Accreditation Council (NAAC) with 'A' grade</p>
          <p className="text-gray-400">Application due June 15, 2024</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4n7qSittQbZ134tVGL9LgN/1122bf7d10cfd69ee5443b168427e367/U-M_Logo-HorizontalStacked-565x332.png?auto=format%2Ccompress&dpr=1" alt="University of Michigan logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">University of Michigan</h2>
          <p className="text-gray-600">Master of Applied Data Science</p>
          <p className="text-gray-500">#1 Public Research University in the U.S. (QS World Rankings, 2022)</p>
          <p className="text-gray-400">Application due July 15, 2024</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3p9ZNoXblmUIo6mCA64e8K/606acde0eea006e97b10079ccbdad90f/logo-color.png?auto=format%2Ccompress&dpr=1" alt="University of Illinois logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">University of Illinois at Urbana-Champaign</h2>
          <p className="text-gray-600">Master of Computer Science in Data Science</p>
          <p className="text-gray-500">#5 in CS Graduate Programs in the U.S. (U.S. News & World Report, 2023)</p>
          <p className="text-gray-400">Application due May 30, 2024</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer" >
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1Rp5a6TiZD2LO4n6MHsMtS/78e1f67bd7784a40ddae53db3389a054/IllinoisGies.jpg?auto=format%2Ccompress&dpr=1" alt="Gies College of Business logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">University of Illinois at Urbana-Champaign</h2>
          <p className="text-gray-600">Master of Business Administration (iMBA)</p>
          <p className="text-gray-500">#12 in Top Public Universities in the U.S. (U.S. News & World Report, 2023)</p>
          <p className="text-gray-400">Application due June 6, 2024</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5FsJACbyl7bFW4DjI2cZDE/181c290b91b2f801fdf09cc3d9bae75a/IIT_Roorkee__3___1_.png?auto=format%2Ccompress&dpr=1" alt="IIT Roorkee logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">IIT Roorkee</h2>
          <p className="text-gray-600">Executive MBA</p>
          <p className="text-gray-500">#8 university in India as per the NIRF 2023, IIT Roorkee is an Institute of National Importance</p>
          <p className="text-gray-400">Application due June 10, 2024</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2Io1b5QQU4YcyVOuQTdjOO/e29485e582c8a543ca136e61d3ef78e8/OPJindal.jpg?auto=format%2Ccompress&dpr=1" alt="O.P. Jindal Global University logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">O.P. Jindal Global University</h2>
          <p className="text-gray-600">M.A. in International Relations, Security, and Strategy</p>
          <p className="text-gray-500">#1 ranked private university in India (QS World University Rankings, 2021)</p>
          <p className="text-gray-400">Application due May 31, 2024</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4r5JpFHQvXgmWvMtRMXbeb/8179cc039f4c5a1e2bfda3007d34de0d/UMGC-Logo.png?auto=format%2Ccompress&dpr=1" alt="University of Maryland Global Campus logo" className="h-16 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">University of Maryland Global Campus</h2>
          <p className="text-gray-600">Bachelor of Science in Cybersecurity Technology</p>
          <p className="text-gray-400">Application due June 11, 2024</p>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-6">Trending Now</h2>
      <div className="border-t border-gray-200 pt-6 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="text-3xl font-semibold mb-2 pb-5 underline">ChatGPT is a top skill</h3>
          <a href="#" className="text-purple-600 hover:underline text-lg">See ChatGPT courses &rarr;</a>
          <p className="text-gray-600 mt-1">2,842,234 learners</p>
          <button className="mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Show all trending skills &rarr;
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2 pb-5 underline">Development</h3>
          <div>
            <a href="#" className="text-purple-600 hover:underline text-lg">Python &rarr;</a>
            <p className="text-gray-600 pb-3">43,868,186 learners</p>
          </div>
          <div className="mt-2">
            <a href="#" className="text-purple-600 hover:underline text-lg">Web Development &rarr;</a>
            <p className="text-gray-600 pb-3">13,004,712 learners</p>
          </div>
          <div className="mt-2">
            <a href="#" className="text-purple-600 hover:underline text-lg">Data Science &rarr;</a>
            <p className="text-gray-600 pb-3">7,038,312 learners</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2 pb-5 underline ">Design</h3>
          <div>
            <a href="#" className="text-purple-600 hover:underline text-lg">Blender &rarr;</a>
            <p className="text-gray-600 pb-3">2,597,063 learners</p>
          </div>
          <div className="mt-2">
            <a href="#" className="text-purple-600 hover:underline text-lg">Graphic Design &rarr;</a>
            <p className="text-gray-600 pb-3">4,087,228 learners</p>
          </div>
          <div className="mt-2">
            <a href="#" className="text-purple-600 hover:underline text-lg">User Experience (UX) Design &rarr;</a>
            <p className="text-gray-600 pb-3">1,885,327 learners</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl underline font-semibold mb-2 pb-5">Business</h3>
          <div>
            <a href="#" className="text-purple-600 hover:underline text-lg ">PMI Project Management Professional (PMP) &rarr;</a>
            <p className="text-gray-600 pb-3">2,228,906 learners</p>
          </div>
          <div className="mt-2">
            <a href="#" className="text-purple-600 hover:underline text-lg">Microsoft Power BI &rarr;</a>
            <p className="text-gray-600 pb-3">3,956,653 learners</p>
          </div>
          <div className="mt-2">
            <a href="#" className="text-purple-600 hover:underline text-lg">Project Management &rarr;</a>
            <p className="text-gray-600 pb-3">3,378,140 learners</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">See what others are achieving through learning : </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <blockquote className="text-gray-800 mb-4">
              <p>EduVista was rated the <strong>most popular online course or certification program</strong> for learning how to code according to <a href="#" className="text-purple-600 hover:underline">StackOverflow’s 2023 Developer survey</a></p>
              <div className="mt-4 flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/128/15059/15059911.png" alt="StackOverflow" className="w-6 h-6 mr-2" />
                <span className="text-gray-600">37,076 responses collected</span>
              </div>
            </blockquote>
            <a href="#" className="text-purple-600 hover:underline">View Web Development courses &rarr;</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <blockquote className="text-gray-800 mb-4">
              <p>EduVista was truly a <strong>game-changer and a great guide</strong> for me as we brought Dimensional to life.</p>
              <div className="mt-4 flex items-center">
                <img src="data:image/jpeg;base64,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" alt="Alvin Lim" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="text-gray-900">Alvin Lim</p>
                  <p className="text-gray-600 text-sm">Technical Co-Founder, CTO at Dimensional</p>
                </div>
              </div>
            </blockquote>
            <a href="#" className="text-purple-600 hover:underline">View this iOS & Swift course &rarr;</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <blockquote className="text-gray-800 mb-4">
              <p>EduVista gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to <strong>get a new role</strong>.</p>
              <div className="mt-4 flex items-center">
                <img src="data:image/jpeg;base64,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" alt="William A. Wachlin" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="text-gray-900">William A. Wachlin</p>
                  <p className="text-gray-600 text-sm">Partner Account Manager at Amazon Web Services</p>
                </div>
              </div>
            </blockquote>
            <a href="#" className="text-purple-600 hover:underline">View this AWS course &rarr;</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <blockquote className="text-gray-800 mb-4">
              <p>With EduVista Business employees were able to marry the two together, technology and consultant soft skills... to help <strong>drive their careers forward</strong>.</p>
              <div className="mt-4 flex items-center">
                <img src="data:image/jpeg;base64,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" alt="Ian Stevens" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="text-gray-900">Ian Stevens</p>
                  <p className="text-gray-600 text-sm">Head of Capability Development, North America at Publicis Sapient</p>
                </div>
              </div>
            </blockquote>
            <a href="#" className="text-purple-600 hover:underline">Read full story &rarr;</a>
          </div>
        </div>
      </div>
    </div>
    

      <Footer className="flex flex-col items-center justify-center w-full" />
    </>
  );
}
