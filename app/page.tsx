import Image from "next/image";
import Logo from "@/app/public/GeekDraft_logo.png"

export default function EntrancePresenter() {
  return (
    <>
      <div
        className="flex justify-center"
      >
        <Image
          src={ Logo }
          alt={"GeekDraftのロゴ"}
          width={500}
        />
      </div>
    </>
  );
}
