import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Gift } from "lucide-react";

export default function LoveCard() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Phát nhạc tự động khi trang mở
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay bị chặn: ", error);
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
         <audio ref={audioRef} src="/audio.mp3" loop />
      <div className="relative w-[50%] h-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500"
          initial={{ scale: 1 }}
          animate={{ scale: opened ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="relative z-10 flex flex-col items-center p-6 text-center">
          <Heart className="text-white w-12 h-12 mb-4 animate-pulse" />
          <h1 className="text-2xl font-bold text-white">Happy Women’s Day!</h1>
          <img src="image3.gif" alt="" />
          <p className="text-white mt-2">Em là điều tuyệt vời nhất trong cuộc sống của anh! 💖</p>
          <button
            className="mt-6 bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-50 transition"
            onClick={() => setOpened(true)}
          >
            Mở quà 🎁
          </button>
          {opened && (
            <motion.div
              className="mt-4 p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-pink-500 font-semibold">Anh yêu em rất nhiều! 💕</p>
              <Gift className="w-10 h-10 text-pink-500 mt-2" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
