import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        areaOfInterest: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
    
      const handleSelectChange = (e) => {
        setFormData((prevState) => ({ ...prevState, areaOfInterest: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const url = 'https://englishexaminerbackend.onrender.com/formData'; // Replace this with the target URL
    
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Send the form data as JSON
          });
    
          if (response.ok) {
            console.log('Form data sent successfully');
            alert('Form submitted successfully!');
            navigate("/pricing")
            
          } else {
            console.log('Form submission failed');
            alert('Failed to submit form.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error submitting the form.');
        }
      };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 mb-24 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Phone Number Field */}
          <div className="space-y-2">
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              id="number" 
              name="number" 
              type="tel" 
              value={formData.number} 
              onChange={handleInputChange} 
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Area of Interest Dropdown */}
          <div className="space-y-2">
            <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-700">Area of Interest</label>
            <select 
              id="areaOfInterest" 
              name="areaOfInterest" 
              value={formData.areaOfInterest} 
              onChange={handleSelectChange} 
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>Select an area of interest</option>
              <option value="job-interview">Interview for Jobs - HR</option>
              <option value="study-abroad">English Interview to study abroad</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
