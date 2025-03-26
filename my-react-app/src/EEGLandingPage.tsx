import { useState } from "react";
import { motion } from "framer-motion";

export default function EEGLandingPage() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [result, setResult] = useState("");

  // ✅ Fix: Properly handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]); // Assigns the first selected file
    }
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setResult("✅ Classification Complete: Language Detected as English");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6 relative overflow-hidden">
      {/* Background Shapes for Aesthetic Effect */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>

      {/* Heading with Animation */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg mb-10"
      >
        EEG Language Classification
      </motion.h1>

      {/* Glassmorphic Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-lg"
      >
        <label className="block mb-6">
          <span className="text-lg font-semibold">Upload EEG CSV File:</span>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="mt-2 p-3 w-full bg-white/20 border border-gray-600 rounded-lg text-white"
          />
        </label>

        <label className="block mb-6">
          <span className="text-lg font-semibold">Person's Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-3 w-full bg-white/20 border border-gray-600 rounded-lg text-white"
          />
        </label>

        <label className="block mb-6">
          <span className="text-lg font-semibold">Native Language:</span>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-2 p-3 w-full bg-white/20 border border-gray-600 rounded-lg text-white"
          />
        </label>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 p-4 rounded-xl text-white font-semibold shadow-lg"
        >
          Submit for Classification
        </motion.button>
      </motion.div>

      {/* Result Section */}
      {result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 bg-green-600/80 backdrop-blur-xl p-5 rounded-xl text-center w-full max-w-lg shadow-lg border border-white/20"
        >
          {result}
        </motion.div>
      )}
    </div>
  );
}
