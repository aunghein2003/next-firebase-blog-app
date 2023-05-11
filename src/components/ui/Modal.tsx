import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import Button from "./Button";

export interface ModalProps {
  open: boolean;
  close: () => void;
  heading: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, close, heading, children }) => {
  return (
    <div
      className={cn(
        "hidden fixed top-0 right-0 bottom-0 left-0 justify-center pt-[20vh] bg-black/60",
        open && "flex"
      )}
      onKeyDown={(e) => {
        console.log(e.key);
      }}
    >
      <div className="w-3/4 md:w-1/2 lg:w-2/5 h-max p-3 rounded-lg shadow-md bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-[620]">
            {heading}
          </h1>
          <Button variant="secondary" outline onClick={() => close()}>
            Close
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
