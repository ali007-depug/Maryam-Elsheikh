import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { useAuth } from "../../../context/Auth";
import { Button } from "../../ui/button";
import { LogOut, Loader2, Camera, Zap, ExternalLink } from "lucide-react";
import { IKContext, IKUpload } from "imagekitio-react";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { authenticator } from "../../../lib/imagekit";
import AdminHeaderSkeleton from "./LoadingSkel";
import { toast } from "sonner";
const publicKey = import.meta.env.VITE_IK_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;

export default function Header({ portfolioType }: { portfolioType: string }) {
  const { userData, logout, isAdmin } = useAuth(); // Using userData for the name

  const [ids, setIds] = useState({ portfolioId: "", headerDocId: "" });
  const [headerData, setHeaderData] = useState<{ avatarUrl: string } | null>(
    null,
  );
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getHeaderData() {
      setLoading(true);
      try {
        const q = query(
          collection(db, "portfolioType"),
          where("type", "==", portfolioType.toLowerCase()),
        );
        const snap = await getDocs(q);

        if (!snap.empty) {
          const pId = snap.docs[0].id;
          const hSnap = await getDocs(
            collection(db, "portfolioType", pId, "header"),
          );

          if (!hSnap.empty) {
            setHeaderData(hSnap.docs[0].data() as { avatarUrl: string });
            setIds({ portfolioId: pId, headerDocId: hSnap.docs[0].id });
          }
        }
      } catch (e) {
        console.error("Header Fetch Error:", e);
      }
      setLoading(false);
    }
    getHeaderData();
  }, [portfolioType]);

  const handleUploadSuccess = async (res: { url: string }) => {
    if (!ids.portfolioId || !ids.headerDocId) return;
    setIsUploading(true);
    try {
      const headerRef = doc(
        db,
        "portfolioType",
        ids.portfolioId,
        "header",
        ids.headerDocId,
      );
      await updateDoc(headerRef, { avatarUrl: res.url });
      setHeaderData(() => ({ avatarUrl: res.url }));
      toast.success("Avatar Has Been Change Successfully");
    } catch (e) {
      console.error("Firestore Update Error:", e);
    } finally {
      setIsUploading(false);
    }
  };

  if (loading) return <AdminHeaderSkeleton />;
  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center border-b border-white/5 bg-slate-950 backdrop-blur-2xl">
        <div className="w-full max-w-[1600px] h-20 px-6 md:px-12 flex justify-between items-center">
          {/* LEFT: Identity & Branding */}
          <div className="flex items-center gap-5">
            <div className="relative group/avatar">
              {isAdmin && (
                <IKUpload
                  fileName={`avatar-${portfolioType}.png`}
                  folder="/admin-headers"
                  onUploadStart={() => setIsUploading(true)}
                  onSuccess={handleUploadSuccess}
                  onError={() => setIsUploading(false)}
                  className="hidden"
                  id="header-avatar-upload"
                />
              )}
              <label
                htmlFor="header-avatar-upload"
                className="cursor-pointer block relative"
              >
                <div className="h-11 w-11 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover/avatar:ring-orange-500/50 transition-all duration-300">
                  <Avatar className="h-full w-full rounded-none">
                    <AvatarImage
                      src={headerData?.avatarUrl}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-slate-900 text-orange-500 font-black text-xs">
                      {userData?.name?.charAt(0) || "A"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                    <Camera size={14} className="text-white" />
                  </div>
                </div>

                {isUploading && (
                  <div className="absolute inset-0 bg-slate-950/90 rounded-xl flex items-center justify-center">
                    <Loader2
                      size={16}
                      className="text-orange-500 animate-spin"
                    />
                  </div>
                )}
              </label>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-black uppercase tracking-tight">
                  {userData?.name || ""}
                </span>
                <div className="flex items-center gap-1 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">
                  <Zap size={10} className="text-orange-500 fill-orange-500" />
                  <span className="text-[8px] font-black text-orange-500 uppercase">
                    {isAdmin ? "Admin":"Guest"}
                  </span>
                </div>
              </div>
              <span className="text-[9px] text-slate-200 font-bold uppercase tracking-[0.2em] mt-0.5">
                {portfolioType}
              </span>
            </div>
          </div>

          {/* RIGHT: Navigation & Session */}
          <div className="flex items-center gap-3">
            {/* Quick Stats / Status (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-4 mr-6">
              <div className="flex flex-col items-end">
                <span className="text-[16px] font-bold text-emerald-500 uppercase">
                  Dashboard
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/5" />
            </div>

            <a
              href="/"
              target="_blank"
              className="h-10 px-4 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">View Portfolio</span>
            </a>

            <Button
              onClick={() => logout()}
              className="bg-white/5 hover:bg-orange-600 text-white border border-white/10 hover:border-orange-600 h-10 px-5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-2 group"
            >
              <span>Sign Out</span>
              <LogOut
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </div>
      </header>
    </IKContext>
  );
}
