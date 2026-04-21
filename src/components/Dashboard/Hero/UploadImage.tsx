import { IKContext, IKUpload } from "imagekitio-react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useState, useEffect } from "react";
import { Loader2, ImageIcon, RefreshCw } from "lucide-react";

import { authenticator } from "../../../lib/imagekit";
import { toast } from "sonner";

const publicKey = import.meta.env.VITE_IK_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;

interface Props {
  ids: { portfolioId: string; heroId: string };
  currentImg?: string; // Add the current image as a prop
  onUploadSuccess: (url: string) => void;
  isAdmin: boolean;
}

export default function ImageKitManager({
  ids,
  onUploadSuccess,
  currentImg,
  isAdmin,
}: Props) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentImg);

  // Update preview if the prop changes (e.g., when switching portfolio types)
  useEffect(() => {
    setPreviewUrl(currentImg);
  }, [currentImg]);

  const onSuccess = async (res: { url: string }) => {
    try {
      if (!ids.portfolioId || !ids.heroId) return;

      const heroRef = doc(
        db,
        "portfolioType",
        ids.portfolioId,
        "Hero",
        ids.heroId,
      );
      await updateDoc(heroRef, { heroImg: res.url });

      // Update the local preview immediately
      setPreviewUrl(res.url);
      onUploadSuccess(res.url); // Inform parent component
      setIsUploading(false);
      toast.success("Hero Image Has Been Change Successfully");
    } catch (error) {
      console.error("Firestore Update Error:", error);
      setIsUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white border rounded-xl shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* 1. IMAGE PREVIEW BOX */}
        <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden border-2 border-slate-100 bg-slate-50 relative group">
          {previewUrl ? (
            <img
              src={`${previewUrl}`}
              alt="Hero Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-300">
              <ImageIcon className="w-10 h-10 mb-1" />
              <span className="text-[10px] uppercase font-bold">No Image</span>
            </div>
          )}

          {isUploading && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <Loader2 className="w-6 h-6 animate-spin text-orange-600" />
            </div>
          )}
        </div>

        {/* 2. UPLOAD CONTROLS */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Hero Visual
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Recommended: 1200x800px. ImageKit will optimize quality and format
              automatically.
            </p>
          </div>
          <IKContext
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
          >
            <div className="relative">
              {isAdmin && (
                <IKUpload
                  fileName={`hero-${ids.portfolioId}.png`}
                  useUniqueFileName={true}
                  onError={() => setIsUploading(false)}
                  onSuccess={onSuccess}
                  onUploadStart={() => setIsUploading(true)}
                  className="hidden"
                  id="ik-upload"
                />
              )}

              <label
                htmlFor="ik-upload"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm
                  ${
                    isUploading
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "bg-orange-600 text-white hover:bg-orange-700 cursor-pointer active:scale-95"
                  }`}
              >
                {isUploading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
                {isUploading ? "Uploading..." : "Change Image"}
              </label>
            </div>
          </IKContext>
        </div>
      </div>
    </div>
  );
}
