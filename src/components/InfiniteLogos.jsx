import { motion } from "framer-motion";

const logos = ["pingdom", "miro", "voiceflow", "monday", "voiceflow2"];

export default function InfiniteLogos() {
  return (
    <div className="w-full overflow-hidden bg-black py-32 px-8">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }} // move half because we duplicated
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15, // adjust speed
        }}
      >
        {/* Duplicate logos row twice for seamless effect */}
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-8 py-4 border border-gray-600 rounded-full text-gray-300 text-xl font-medium"
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
