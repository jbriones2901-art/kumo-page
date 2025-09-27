import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        className="text-4xl font-bold text-red-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        一级方程式 🏎️
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        速度、激情与荣耀！
      </motion.p>
    </div>
  )
}
