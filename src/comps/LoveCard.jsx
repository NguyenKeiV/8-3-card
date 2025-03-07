import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift } from "lucide-react";

export default function LoveCard() {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  const content = [
    {
      text: "Xin chào cô gái đáng yêu của anh! \n Mới dậy phải không nè?\n Đêm qua ngủ ngon chứ! \n Chắc là có rồi, cười tủm tỉm thế cơ mà!" ,
      image: "Cute.gif",
      photo: "anh4.JPG"
    },
    {
      text: "Món quà tối qua anh nói chẳng có gì lớn cả, chỉ là những lời chúc gửi em thôi, đừng chê nhá 😊 ",
      image: "Cute3.gif",
      photo: "anh7.jpg"
    },
    {
      text: "Chúc em luôn vui vẻ\nVà gặp nhiều may mắn trong cuộc sống\nMọi điều tốt đẹp sẽ đến với em! ✨\nChúc em mỗi ngày thức dậy\nĐều tràn đầy năng lượng\nVà háo hức với những điều mới! 🌞",
      image: "Catshy.gif",
      photo: "anh3.jpg"
    },
    {
      text: "Chúc em luôn tự tin vào những quyết định của mình Và đạt được mọi điều em mong muốn 💫 \n Những mối quan hệ xung quanh em tốt lên, để em của anh không phải suy nghĩ quá nhiều nữa nhé!",
      image: "Cute4.gif",
      photo: "anh4.JPG"
    },
    {
      text: "Không chúc em giàu có\nChỉ chúc em bình yên\nKhông chúc em lộng lẫy\nChúc em không muộn phiền!",
      image: "Cute4.gif",
      photo: "anh4.JPG"
    },
    {
      text: "Chúc em ngày  thật nhiều niềm vui và hạnh phúc. Thương em thật nhiều! ❤️",
      image: "Cute6.gif",
      photo: "anh5.JPG"
    }
  ];

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay bị chặn, chờ người dùng tương tác...", error);
        });
      }
    };

    playAudio();
    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []);

  const handleNext = () => {
    if (step < content.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <audio ref={audioRef} src="audio.mp3" loop />

      <div className="flex flex-col items-center justify-between relative w-[95%] h-[80vh] md:w-[60%] bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl p-4">
        <div className="text-center w-full font-semibold font-outfit pt-4 mb-8">
          <motion.h1 
            className="font-playwrite text-xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Happy 8/3 my darling!
          </motion.h1>
        </div>

        <div className="flex-1 flex items-start justify-center w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-10 w-full"
            >
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="flex-1">
                  <img 
                    src={content[step].image} 
                    alt="" 
                    className="w-full h-40 object-cover max-w-[140px] mx-auto rounded-xl" 
                  />
                </div>
                <div className="flex-1">
                  <img 
                    src={content[step].photo} 
                    alt="" 
                    className="w-full h-40 object-cover max-w-[140px] rounded-xl mx-auto" 
                  />
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-playwrite text-base text-center px-2 whitespace-pre-line"
              >
                {content[step].text}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full flex justify-center pt-6 pb-4">
          <button 
            onClick={handleNext}
            className="border-2 w-2/3 rounded-lg font-outfit px-3 py-1.5 hover:bg-pink-200 transition-colors text-sm"
          >
            {step === content.length - 1 ? "Xem lại" : "Tiếp theo"}
          </button>
        </div>
      </div>
    </div>
  );
}
