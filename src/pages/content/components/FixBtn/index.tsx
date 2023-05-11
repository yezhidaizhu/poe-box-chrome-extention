import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LeftOutlined } from "@ant-design/icons";

const style: any = {
  writingMode: "vertical-lr",
  lineHeight: "14px",
  fontSize: "14px",
  boxSizing: "border-box",
};

export default function FixBtn(props: { onClick: () => void }) {
  const { onClick } = props;

  const dragDivRef = useRef<any>();

  const [isDrag, setIsDrag] = useState(false);

  return (
    <motion.div
      ref={dragDivRef}
      drag="y"
      dragConstraints={{
        top: -window.innerHeight,
        bottom: 32,
      }}
      animate={false}
      style={style}
      className={` fixed right-0 bottom-[32px] z-[1000] bg-black text-white cursor-pointer select-none py-2 px-1
                    flex flex-row items-center space-y-1`}
      whileTap={{ scale: 0.9 }}
      dragMomentum={false}
      onDragStart={() => {
        setIsDrag(true);
      }}
      onDragEnd={(e) => {
        setTimeout(() => {
          setIsDrag(false);
        });
      }}
      onTap={() => {
        if (isDrag) return;
        onClick?.();
      }}
    >
      {/* <LeftOutlined /> */}
      <div>poe</div>
    </motion.div>
  );
}
