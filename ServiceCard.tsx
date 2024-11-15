import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4"
      >
        <Icon className="h-6 w-6 text-blue-400" />
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}