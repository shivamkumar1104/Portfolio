import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <Sparkles size={18} className="text-indigo-400" />
      <h1 className="text-xl font-bold tracking-tighter text-white">SK</h1>
    </motion.div>
  );
};

export default Logo;
