import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaCode,
  FaLaptopCode,
  FaVectorSquare,
  FaPencilAlt,
  FaGlobe,
} from "react-icons/fa";

// Animation variants for cards and containers
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 ease-in-out overflow-hidden"
    >
      {/* Hovering Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-70 transition duration-500 ease-in-out"></div>
      <div className="relative z-10 flex items-center mb-4 sm:mb-6">
        <div className="text-4xl sm:text-5xl text-blue-600 group-hover:text-white transition duration-300 ease-in-out mr-4">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-white transition duration-300 ease-in-out">
          {title}
        </h3>
      </div>
      <p className="relative z-10 text-sm sm:text-base text-gray-600 group-hover:text-white leading-relaxed transition duration-300 ease-in-out">
        {description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <div className="relative py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-100 via-white to-yellow-50 overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-400 filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-purple-400 filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-pink-400 filter blur-2xl opacity-30"
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Title with responsive text sizes */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800"
        >
          Our Services
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-sm sm:text-lg text-gray-600 mt-4"
        >
          We bring your vision to life with premium graphic design and web
          development services.
        </motion.p>

        {/* Service Cards */}
        <motion.div
          className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ServiceCard
            icon={<FaPaintBrush />}
            title="Graphic Design"
            description="Visually stunning designs, including business cards, flyers, and posters."
          />
          <ServiceCard
            icon={<FaPencilAlt />}
            title="Logo Design"
            description="Crafting logos that align with your brand identity and stand out."
          />
          <ServiceCard
            icon={<FaLaptopCode />}
            title="Web Development"
            description="Responsive, modern websites tailored to your business's audience."
          />
          <ServiceCard
            icon={<FaCode />}
            title="UI/UX Design"
            description="Designing user interfaces and experiences that are intuitive and engaging."
          />
          <ServiceCard
            icon={<FaVectorSquare />}
            title="Illustrations"
            description="Custom illustrations to highlight your brand's personality and style."
          />
          <ServiceCard
            icon={<FaGlobe />}
            title="SEO Optimization"
            description="Boost your website's visibility with expert SEO strategies."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
