'use client';

import { contactValidationSchema } from '@/helper/validations/contact';
import { useFormik } from 'formik';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      subject: 'General',
      inquiry: '',
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      console.log('Form Data:', values);
      alert('Form submitted successfully!');
      formik.resetForm();
    },
  });

  return (
    <section className="py-12 md:py-20 bg-[url('/contact-cta-bg.png')] bg-no-repeat bg-contain bg-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* Left Column */}
        <div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl lg:text-[38px] font-semibold leading-[120%] bg-gradient-to-r from-[#10052F] to-[#297F95] bg-clip-text text-transparent mb-6">
            Let's Get in Touch
          </h2>

          <div className="flex flex-col gap-4 md:gap-5">
            {/* Address */}
            <div className="flex min-h-[150px] md:h-[186px] w-full md:w-[80%] p-4 md:p-6 flex-col justify-between items-start flex-shrink-0 rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <img src="/location.png" alt="Location" className="w-8 h-8 md:w-auto md:h-auto" />
              <p className="text-[#10052F] font-['Plus_Jakarta_Sans'] text-sm md:text-[15px] font-medium">
                Hadishon 14, Jerusalem, Israel
              </p>
            </div>

            {/* Phone */}
            <div className="flex min-h-[150px] md:h-[186px] w-full md:w-[80%] p-4 md:p-6 flex-col justify-between items-start flex-shrink-0 rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <img src="/phone.png" alt="Phone" className="w-8 h-8 md:w-auto md:h-auto" />
              <p className="text-[#10052F] font-['Plus_Jakarta_Sans'] text-sm md:text-[15px] font-medium">
                <a href="tel:+972526659995" className="hover:underline">+972 52 6659995</a>
              </p>
            </div>

            {/* Email */}
            <div className="flex min-h-[150px] md:h-[186px] w-full md:w-[80%] p-4 md:p-6 flex-col justify-between items-start flex-shrink-0 rounded-[24px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <img src="/message.png" alt="Email" className="w-8 h-8 md:w-auto md:h-auto" />
              <p className="text-[#10052F] font-['Plus_Jakarta_Sans'] text-sm md:text-[15px] font-medium break-all">
                <a href="mailto:joleen.istaiti@gagany-pharmaceuticals.com" className="hover:underline">joleen.istaiti@gagany-pharmaceuticals.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-[#0A0A0A] text-base md:text-xl lg:text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-6 md:leading-7 mb-6 md:mb-8">
            Please fill out the form below and let us know how we can help you. We will then contact
            you shortly by email or telephone.
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-5">
            {/* Name */}
            <div className="flex p-3 md:p-[12px_22px] flex-col items-start gap-2 self-stretch rounded-[16px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <label className="text-sm md:text-base lg:text-lg text-[#103E42] font-bold font-['Plus_Jakarta_Sans'] leading-5">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full text-sm md:text-base placeholder:text-[#8F8F8F] placeholder:font-['Plus_Jakarta_Sans'] placeholder:text-sm md:placeholder:text-[14px] lg:placeholder:text-[18px] placeholder:font-medium placeholder:italic-0 border-none bg-transparent focus:outline-none focus:border-none"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex p-3 md:p-[12px_22px] flex-col items-start gap-2 self-stretch rounded-[16px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <label className="text-sm md:text-base lg:text-lg text-[#103E42] font-bold font-['Plus_Jakarta_Sans'] leading-5">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full text-sm md:text-base placeholder:text-[#8F8F8F] placeholder:font-['Plus_Jakarta_Sans'] placeholder:text-sm md:placeholder:text-[14px] lg:placeholder:text-[18px] placeholder:font-medium placeholder:italic-0 border-none bg-transparent focus:outline-none focus:border-none"
                placeholder="Enter phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex p-3 md:p-[12px_22px] flex-col items-start gap-2 self-stretch rounded-[16px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <label className="text-sm md:text-base lg:text-lg text-[#103E42] font-bold font-['Plus_Jakarta_Sans'] leading-5">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full text-sm md:text-base border-none bg-transparent placeholder:text-[#8F8F8F] placeholder:font-['Plus_Jakarta_Sans'] placeholder:text-sm md:placeholder:text-[14px] lg:placeholder:text-[18px] placeholder:font-medium placeholder:italic-0 focus:outline-none focus:border-none"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div className="flex p-3 md:p-[12px_22px] flex-col items-start gap-2 self-stretch rounded-[16px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <label className="text-sm md:text-base lg:text-lg text-[#103E42] font-bold font-['Plus_Jakarta_Sans'] leading-5">
                Choose subject
              </label>
              <select
                name="subject"
                className="w-full text-sm md:text-base border-none bg-transparent focus:outline-none outline-none focus:border-none text-[#8F8F8F] font-['Plus_Jakarta_Sans'] text-sm md:text-base lg:text-[18px] font-medium italic-0"
                value={formik.values.subject}
                onChange={formik.handleChange}
              >
                <option value="General">General</option>
                <option value="Support">Support</option>
                <option value="Inquiry">Inquiry</option>
              </select>
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.subject}</p>
              )}
            </div>

            {/* Inquiry */}
            <div className="flex p-3 md:p-[12px_22px] flex-col items-start gap-2 self-stretch rounded-[16px] border border-[#FFF] bg-[rgba(246,246,246,0.4)] backdrop-blur-[5.55px]">
              <label className="text-sm md:text-base lg:text-lg text-[#103E42] font-bold font-['Plus_Jakarta_Sans'] leading-5">
                Enter your inquiry
              </label>
              <textarea
                name="inquiry"
                rows={4}
                className="w-full text-sm md:text-base border-none bg-transparent focus:outline-none focus:border-none placeholder:text-[#8F8F8F] placeholder:font-['Plus_Jakarta_Sans'] placeholder:text-sm md:placeholder:text-[14px] lg:placeholder:text-[18px] placeholder:font-medium placeholder:italic-0 resize-y"
                placeholder="Enter details"
                value={formik.values.inquiry}
                onChange={formik.handleChange}
              ></textarea>
              {formik.touched.inquiry && formik.errors.inquiry && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{formik.errors.inquiry}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative overflow-hidden flex items-center justify-center gap-2 px-6 md:px-12 cursor-pointer py-2.5 md:py-3 border border-[#10052F] rounded-full text-sm md:text-base text-[#10052F] font-semibold transition-all duration-500 ease-out group w-full md:w-auto"
            >
              {/* Text & Icon */}
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 ease-out group-hover:text-white">
                Submit <ArrowRight className="w-4 h-4" />
              </span>

              {/* Hover Background Animation */}
              <span className="absolute inset-0 w-[120%] scale-x-0 origin-left rounded-full bg-[#10052F] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
