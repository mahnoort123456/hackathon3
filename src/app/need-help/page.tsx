// 'use client'
// import React from 'react';

// const Contact = () => {
//   return (
//     <div className='bg-white'>
//     {/* <section className="text-gray-500 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-col text-center w-full mb-20">
      
//       <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black">
//         Get In Touch With Us
//       </h1>
//       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//     For more information About Our Product & Services. Please Feel Free To Drop Us<br/>
//     An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
//       </p>
//     </div>
//   </div>
// </section>

// <div className="p-6 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Address</h3>
//               <p className="text-gray-600">
//                 123 Business Street, Suite 100<br />
//                 New York, NY 10001
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center justify-center">
//   <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
//     Phoebe Caulfield
//   </h2>
//   <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
//   <p className="text-base">
//     Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial
//     venmo tbh hot chicken gentrify portland.
//   </p>
// </div> */}













//           </div>

//   );
// };

// export default Contact;



import React from "react";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

import ContactSection from "../components/contactSection";


const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const ContactPage = () => {
  return (
    <div id="need-help" className="bg-white">
    <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
      <h1 className="font-semibold text-black text-4xl text-center sm:text-3xl">
        Get In Touch With Us
      </h1>

      <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
        <div className="flex flex-col space-y-8 px-6 sm:px-10">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-black h-[27.59px] mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-black  text-[20px] sm:text-[24px] font-medium`}
              >
                Address
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                236 5th SE Avenue, New<br/> York NY10000, United<br/> States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
                <FaPhoneAlt  className="text-black h-[27.59px] mt-1"/>
          
            <div>
              <h2
                className={`${poppins.className} text-black  text-[20px] sm:text-[24px] font-medium`}
              >
                Phone
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <GoClockFill className="text-black h-[27.59px] mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-black  text-[20px] sm:text-[24px] font-medium`}
              >
                Working Time
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Monday-Friday: 9:00 -<br/> 22:00 <br />
                Saturday-Sunday: 9:00 -<br/> 21:00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 w-full sm:w-[635px]">
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className={`${poppins.className} text-black  text-[16px] sm:text-[18px] font-medium`}
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Abc"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            <div className="mb-4 mt-8">
              <label
                htmlFor="email"
                className={`${poppins.className} text-black  text-[16px] sm:text-[18px] font-medium`}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            <div className="mb-4 mt-8">
              <label
                htmlFor="subject"
                className={`${poppins.className} text-black  text-[16px] sm:text-[18px] font-medium`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="This is an optional"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
              />
            </div>

            <div className="mb-8 mt-8">
              <label
                htmlFor="message"
                className={`${poppins.className} text-black  text-[16px] sm:text-[18px] font-medium`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I’d like to ask about"
                className="w-full sm:w-[527px] h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                rows={4}
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-[237px] h-[55px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <ContactSection />
    </div>
    </div>
  );
};

export default ContactPage;
  