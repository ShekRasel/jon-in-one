"use client";
import { ArrowLeftFromLine } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter();
  return (
    <button
      className={`rounded-full p-2 cursor-pointer transition-colors duration-200 ${className}`}
      onClick={() => router.back()}
    >
      <ArrowLeftFromLine />
    </button>
  );
};

export default BackButton;
