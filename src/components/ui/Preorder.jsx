import React, { useState } from "react";

export default function Preorder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    song: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Preorder submitted:", formData);

    // later:
    // send to API
    // show success message
    // reset form
  };

  return (
    <div className="fixed top-0 z-[99999] h-[700px] w-[700px] bg-amber-300 text-white p-4 border">
      <h2 className="text-lg font-bold mb-4">Preorder</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded border text-black"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded text-black"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 rounded text-black"
        />

        <textarea
          name="song"
          placeholder="Song Name"
          value={formData.song}
          onChange={handleChange}
          className="p-2 rounded text-black resize-none"
          rows={3}
        />

        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:opacity-80 transition"
        >
          Submit Preorder
        </button>
      </form>
    </div>
  );
}
