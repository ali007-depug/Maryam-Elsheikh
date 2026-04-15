import { IconHandler, type IconName } from "../../AboutMe/IconsHandler"; // Import your existing handler
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

// This list should match your iconMap keys exactly
const AVAILABLE_ICONS: IconName[] = [
  "FaGraduationCap",
  "GiChemicalDrop",
  "GrGroup",
  "MdOutlineStarPurple500",
  "FaPenAlt",
  "FaBookReader",
  "FaChessQueen",
  "FaFacebook",
  "FaLinkedin",
  "LuPenTool",
];

interface IconEditorProps {
  currentIcon: IconName | string;
  currentText: string;
  currentColor: string;
  currentSize: number;
  currentTitle: string;
  onUpdate: (data: {
    icon: string;
    text: string;
    iconColor: string;
    size: number;
    title:string,
  }) => void;
}

export default function IconEditor({
  currentIcon,
  currentText,
  currentColor,
  currentSize,
  currentTitle,
  onUpdate,
}: IconEditorProps) {
  return (
    <div className="p-4 border rounded-xl bg-slate-50 space-y-4 shadow-sm">
      <div className="flex items-center gap-4 mb-2">
        <div className="p-3 bg-white rounded-lg border shadow-sm">
          <IconHandler iconName={currentIcon} color={currentColor} size={30} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-700">Card Preview</h4>
          <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
            Live Changes
          </p>
        </div>
                      <Input
                value={currentTitle}
                placeholder="e.g. 2+ Years"
                onChange={(e) =>
                  onUpdate({
                    icon: currentIcon,
                    text: currentText,
                    iconColor: currentColor,
                    size: currentSize,
                    title:e.target.value,
                  })
                }
                className="h-9 text-xs"
              />

      </div>

      <div className="flex gap-4">
        {/* ICON SELECTION */}
        <div className="space-y-1.5">
          <Label className="text-[10px] font-bold text-slate-500 uppercase">
            Select Icon
          </Label>
          <select
            value={currentIcon}
            onChange={(e) =>
              onUpdate({
                icon: e.target.value,
                text: currentText,
                iconColor: currentColor,
                size: currentSize,
                title:currentTitle
              })
            }
            className="w-full  h-9 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
          >
            {AVAILABLE_ICONS.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* COLOR PICKER */}
        <div className="space-y-1.5">
          <Label className="text-[10px] font-bold text-slate-500 uppercase">
            Icon Color
          </Label>
          <div className="flex gap-2">
            <Input
              type="color"
              value={currentColor}
              onChange={(e) =>
                onUpdate({
                  icon: currentIcon,
                  text: currentText,
                  iconColor: e.target.value,
                  size: currentSize,
                  title:currentTitle
                })
              }
              className="w-10 h-9 p-1 cursor-pointer"
            />
            <Input
              type="text"
              value={currentColor}
              onChange={(e) =>
                onUpdate({
                  icon: currentIcon,
                  text: currentText,
                  iconColor: e.target.value,
                  size: currentSize,
                  title:currentTitle,
                })
              }
              className="h-9 text-[10px] font-mono"
            />
          </div>
        </div>

        {/* SIZE SLIDER */}
        <div className="space-y-1.5">
          <Label className="text-[10px] font-bold text-slate-500 uppercase">
            Icon Size ({currentSize}px)
          </Label>
          <Input
            type="range"
            min="20"
            max="60"
            value={currentSize}
            onChange={(e) =>
              onUpdate({
                icon: currentIcon,
                text: currentText,
                iconColor: currentColor,
                size: parseInt(e.target.value),
                title:currentTitle,
              })
            }
            className="h-9 cursor-pointer accent-orange-600"
          />
        </div>

      </div>
              {/* TEXT CONTENT */}
        <div className="space-y-1.5">
          <p className="overflow-ellipsis w-100">{currentText}</p>

          <Dialog>
            <DialogTrigger className="text-bold text-white p-1.5 bg-black/70 hover:bg-black cursor-pointer rounded">
              Edit Text
            </DialogTrigger>
            <DialogContent>
              <Textarea
                value={currentText}
                placeholder="e.g. 2+ Years"
                onChange={(e) =>
                  onUpdate({
                    icon: currentIcon,
                    text: e.target.value,
                    iconColor: currentColor,
                    size: currentSize,
                    title:currentTitle,
                  })
                }
                className="h-9 text-xs"
              />
            <DialogFooter>

            <DialogClose asChild>
              <Button variant={"outline"}>
                Close
                </Button>
            </DialogClose>
            </DialogFooter>
            </DialogContent>

          </Dialog>
        </div>

    </div>
  );
}
