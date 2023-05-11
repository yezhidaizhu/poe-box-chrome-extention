import { useState } from "react";
import { motion } from "framer-motion";
import FixBtn from "../components/FixBtn";
import { Resizable } from "re-resizable";

export default function App() {
  const [show, setShow] = useState(false);

  const [size, setSize] = useState({ width: 200, height: 200 });

  const [isResize, setIsResize] = useState(false);
  console.log(size);

  return (
    <div className="app">
      <motion.div
        className=" fixed right-0 bottom-0 z-[1000] bg-red-500 overflow-hidden"
        initial={{ height: 0, width: 0 }}
        style={isResize ? size : {}}
        animate={
          isResize
            ? false
            : {
                height: show ? size.height : 0,
                width: show ? size.width : 0,
              }
        }
      >
        <Resizable
          enable={{
            top: true,
            right: false,
            bottom: false,
            left: true,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          onResize={(e, d, ref) => {
            setSize({
              width: ref?.clientWidth,
              height: ref?.clientHeight,
            });
          }}
          onResizeStart={() => {
            setIsResize(true);
          }}
          onResizeStop={() => {
            setIsResize(false);
          }}
          size={size}
          className=" bg-green-300"
        >
          123
        </Resizable>
      </motion.div>

      <FixBtn
        onClick={() => {
          setShow((show) => !show);
        }}
      />
    </div>
  );
}
