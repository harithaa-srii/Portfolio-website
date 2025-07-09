// src/Pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-7xl md:text-8xl font-extrabold text-purple-600 mb-2"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-medium mb-6"
        >
          Oops! Page not found.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
