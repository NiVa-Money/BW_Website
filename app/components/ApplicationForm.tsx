// import { useState, FormEvent, ChangeEvent } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   resume: File | null;
//   coverLetter: string;
//   message: string;
// }

// export default function ApplicationForm() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//     resume: null,
//     coverLetter: '',
//     message: ''
//   });

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     setFormData((prev) => ({ ...prev, resume: file || null }));
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//     // Handle form submission logic
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-2">Join Our Team</h2>
//         <p className="text-gray-600">We&apos;re hiring across multiple roles</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             required
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Resume/CV</label>
//           <input
//             type="file"
//             name="resume"
//             required
//             onChange={handleFileChange}
//             accept=".pdf,.doc,.docx"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Cover Letter (Optional)</label>
//           <textarea
//             name="coverLetter"
//             value={formData.coverLetter}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Message</label>
//           <textarea
//             name="message"
//             required
//             value={formData.message}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#387D8C] text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  message: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({ ...prev, resume: file || null }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="max-w-4xl mt-10 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-black">Join Our Team</h2>
        <p className="text-gray-600">We&apos;re hiring across multiple roles</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-6">
          <div className="flex-1">
            <label className="block text-sm text-black font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm text-black font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="flex-1">
            <label className="block text-sm  text-black font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm text-black font-medium mb-2">Resume/CV</label>
            <input
              type="file"
              name="resume"
              required
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="flex-1">
            <label className="block text-sm text-black font-medium mb-2">
              Cover Letter (Optional)
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm text-black font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#387D8C] text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
