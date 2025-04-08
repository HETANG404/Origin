import Link from "next/link";
import LinkText from "../base_ui/link_text";
import "@/app/globals.css";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto w-full max-w-[1440px] h-[250px] relative bg-footer">



        <div className="w-[433.90px] pl-4 pb-4 left-0 top-[211px] absolute inline-flex justify-start items-center gap-2.5">
          <div className="px-0.5 flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-footer-text text-[15px] font-normal leading-[15px]">
              @2025 ORI.Tang
            </div>
          </div>
          <div className="px-0.5 flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-footer-text text-[15px] font-normal leading-[15px]">
              CommunityGuidelines
            </div>
          </div>
        </div>
        <div className="w-[1425.47px] h-0 left-[14.53px] top-[135px] absolute outline outline-1 outline-offset-[-0.50px] outline-footer-text" />
        <div className="w-[153.56px] pl-2.5 pr-[30px] pb-4 left-[1286.44px] top-[185px] absolute inline-flex flex-col justify-center items-center gap-2.5">
          <div className="self-stretch px-0.5 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-footer-text text-xl font-normal leading-tight">
              Region
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[50px] left-0 top-[45px] absolute bg-footer-gray" />
        <div className="w-[75.94px] pl-4 left-0 top-[16px] absolute inline-flex justify-start items-center gap-2.5">
          <div className="px-0.5 flex justify-center items-center gap-2.5">
            <div className="text-center font-family justify-center text-footer-text text-4xl leading-9">
            <LinkText href="/home">ORI</LinkText>
            </div>
          </div>
        </div>
      </div>

    </footer>

  );
}
