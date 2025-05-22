import {
  Dialog as UIDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const DialogBox = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <UIDialog open={open} onOpenChange={setOpen}>
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

export default DialogBox;
