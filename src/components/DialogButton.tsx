import {
  Dialog as UIDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ReactNode } from "react";
import { Button } from "./ui/button";

const Dialog = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <UIDialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Thanks for reaching out!
          </DialogTitle>
          <DialogDescription className="text-center text-pretty">
            Thank you for your request. We appreciate your interest and will
            respond promptly. <br />
            <Button onClick={() => setOpen(false)} className="mt-2">
              OK
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </UIDialog>
  );
};

export default Dialog;
