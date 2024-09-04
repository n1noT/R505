import { motion , useScroll, useTransform} from "framer-motion"


export default function App() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 64], [64, 0]);

  return (
    <ul className="w-full h-full min-h-screen bg-slate-900 p-12 flex justify-between flex-wrap gap-8">
      <li className="w-72 h-72 bg-slate-800 rounded-lg flex justify-center items-center gap-8 overflow-hidden">
        <motion.div
            className="bg-slate-200 w-16 h-16 rounded-lg"
            animate={{ y: [200, 0], opacity: [0, 1]}}
            transition={{ duration: 2, ease: "easeInOut", delay: 1, repeat: Infinity, repeatDelay: 2 }}
          />
        <motion.div
            className="bg-slate-200 w-16 h-16 rounded-full"
            animate={{ y: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1, repeat: Infinity, repeatDelay: 2 }}
          />
      </li>
      <li className="w-72 h-72 bg-slate-800 rounded-lg flex justify-center items-center gap-8 overflow-hidden">
        <motion.div
            className="bg-pink-600 w-16 h-16 rounded-lg"
            animate={{ scale: [1, 2, 2, 2, 1], rotate: [0, 0, 90, 90, 0], borderRadius: ["20%", "20%", "20%", "50%", "20%"] }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity  }}
          />
      </li>
      <li className="w-72 h-72 bg-slate-800 rounded-lg flex justify-center items-center gap-8 overflow-hidden">
        <motion.div
            className="bg-red-400 w-12 rounded-lg"
            style={{height: height }}
        />
      </li>
      <li className="w-72 h-72 bg-slate-800 rounded-lg flex justify-center items-center gap-8 overflow-hidden">
          <motion.button
          className="bg-green-600 text-white rounded-lg px-6 py-4"
            whileHover={{ scale: 1.1 , color: "rgb(0, 0, 0)", backgroundColor: "rgb(200, 200, 200)" }}
            whileTap={{ scale: 0.9 }}
          >
          subscribe
          </motion.button>
      </li>
      <li className="w-72 h-72 bg-slate-800 rounded-lg flex justify-center items-center gap-8 overflow-hidden">
        <motion.div
            className="bg-orange-600 w-20 h-20 rounded-lg"
            drag
            // les distances correspondent à la moitié de la taille de l'élément moins la moitié de la taille du conteneur 
            // (288/2 - 80/2 = 104) 
            dragConstraints={{
              top: -104,
              left: -104,
              right: 104,
              bottom: 104,
            }}
          />
      </li>
    </ul>
        
  )
}