import React from 'react'

export const metadata = {
    title: "Contact",
    description: "Get in touch with us",
  };
  
  export default function ContactPage() {
    return (
      <main className="min-h-screen text-white px-6 py-12">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl text-white font-bold mb-6">Contact Us</h1>
  
          <p className="mb-8 text-gray-600">
            {/* Add your intro text here */}
            We&apos;d love to hear from you. Reach out using any of the information below
          </p>
  
          {/* Contact Info */}
          <div className="mb-10 space-y-2">
            <p>
              <strong>Email:</strong> {/* Add email */}
              <span>founder@humanndesign.com</span>
            </p>
            <p>
              <strong>Phone:</strong> {/* Add phone */}
              <p>7318822974</p>
            </p>
           
          </div>
  
         
        </section>
      </main>
    );
  }