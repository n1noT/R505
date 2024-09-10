import { AnimatePresence, motion , useScroll, useTransform} from "framer-motion"
import {twMerge} from "tailwind-merge";
import { useState } from "react";

const baseClasses = "rounded-md font-medium focus:outline-none";

const variantsLookup = {
  primary:
    "bg-white text-violet-800 w-full",
  secondary:
    "bg-none text-white w-full",
  danger:
    "bg-violet-500 text-white",
  text: "text-slate-700 uppercase underline hover:text-slate-600 hover:bg-slate-900/5",
};

const sizesLookup = {
  small: "px-3 py-1.5 text-sm ",
  medium: "px-5 py-3 ",
  large: "px-8 py-4 text-lg ",
};

function Button ({ variant = "primary", size = "medium", className, ...rest })  {
  return (
    <button
      {...rest}
      className={twMerge(baseClasses, variantsLookup[variant], sizesLookup[size], className)}
    />
  );
};

export function ExclamationCircleIcon(props) {
  return (
    <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
  );
}


export default function App() {
  const [isActive, setIsActive] = useState(false);
  


  function randomColor() {
    let colors = ["red-400", "yellow-400", "green-400", "blue-400", "indigo-400", "purple-400", "pink-400"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const color = randomColor();
  const textColor = "text-" + color;
  const backgroundColor = "bg-" + color;

  return (
    <div className="grid h-screen place-content-center bg-slate-900">
      <Button variant="danger" className={backgroundColor} onClick={() => setIsActive(!isActive)}>Open modal</Button>
      <AnimatePresence>
      {isActive && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className={`p-8 rounded-lg flex items-center justify-center flex-col gap-8 relative overflow-hidden ${backgroundColor}`}
            initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <ExclamationCircleIcon className="opacity-25 w-64 h-64 absolute -top-24 -left-24 rotate-12 z-0"/>
            <motion.div
              className= "bg-white rounded-full p-2 z-10"
              initial={{ opacity: 0, rotate: 360 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ExclamationCircleIcon className={`${textColor} w-16 h-16`} />
            </motion.div>
            <h2 className="text-2xl font-bold text-white text-center z-10">One more thing!</h2>
            <p className="text-white max-w-96 text-center z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere repudiandae beatae a enim?</p>
            <div className="flex justify-between gap-4 w-full z-10">
              <Button variant="secondary" onClick={() => setIsActive(false)}>Nah, go back</Button>
              <Button onClick={() => setIsActive(false)} className={textColor}>Understood!</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
  /*
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
  */
}