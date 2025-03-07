import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift } from "lucide-react";

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    setDisplayText("");
    setIsTyping(true);
    let currentText = "";
    let currentIndex = 0;

    const addNextChar = () => {
      if (currentIndex < text?.length) {
        const char = text[currentIndex];
        currentText += char;
        setDisplayText(currentText);
        currentIndex++;

        // Xác định độ trễ cho ký tự tiếp theo
        let delay = 50; // Độ trễ mặc định
        if (char === '.' || char === '!' || char === '?') {
          delay = 300; // Dừng lâu hơn ở cuối câu
        } else if (char === ',' || char === ';') {
          delay = 200; // Dừng ở dấu phẩy
        } else if (char === '\n') {
          delay = 300; // Dừng khi xuống dòng
        }

        setTimeout(addNextChar, delay);
      } else {
        setIsTyping(false);
      }
    };

    addNextChar();

    return () => {
      setIsTyping(false);
    };
  }, [text]);

  return <span>{displayText}</span>;
};

export default function LoveCard() {
  const [step, setStep] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
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
      text: "Chúc em luôn vui vẻ, gặp nhiều may mắn trong cuộc sống\nMọi điều tốt đẹp sẽ đến với em! ✨\nChúc em mỗi ngày thức dậy\nĐều tràn đầy năng lượng\nVà háo hức với những điều mới! 🌞",
      image: "Catshy.gif",
      photo: "anh3.jpg"
    },
    {
      text: "Chúc em luôn tự tin vào những quyết định của mình, đạt được mọi điều em mong muốn 💫 \n Những mối quan hệ xung quanh em tốt lên, để em của anh không phải suy nghĩ quá nhiều nữa nhé!",
      image: "Cute4.gif",
      photo: "anh4.JPG"
    },
    {
      text: "Không chúc em giàu có\nChỉ chúc em bình yên\nKhông chúc em lộng lẫy\nChúc em không muộn phiền!",
      image: "Cute4.gif",
      photo: "anh4.JPG"
    },
    {
      text: "Chúc em ngày 8/3 thật nhiều niềm vui và hạnh phúc. Thương em thật nhiều! ❤️",
      image: "Cute6.gif",
      photo: "anh5.JPG"
    }
  ];

  const handleStart = () => {
    setShowOverlay(false);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Lỗi phát nhạc:", error);
      });
    }
  };

  const handleNext = () => {
    if (step < content.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  if (showOverlay) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
        <audio ref={audioRef} src="audio.mp3" loop />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-6 rounded-xl shadow-lg text-center"
        >
          <h2 className="text-xl font-playwrite mb-4">Thiệp chúc mừng 8/3</h2>
          <p className="text-sm mb-6 font-outfit">Chạm vào nút bên dưới để mở thiệp 💌</p>
          <button
            onClick={handleStart}
            className="px-6 py-2 bg-pink-400 text-white rounded-lg font-outfit hover:bg-pink-500 transition-colors"
          >
            Mở thiệp
          </button>
        </motion.div>
      </div>
    );
  }

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
            <TypewriterText text="Happy 8/3 my darling!" />
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
                <TypewriterText text={content[step].text} />
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
