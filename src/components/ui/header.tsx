

import LinkText from "../base_ui/link_text";
import ProfileIcon from "../base_ui/profile_icon";



export default function Header() {

    return (
        <header>
            <div className="w-full h-[60px] relative bg-header mb-6 mt-6 pl-6 pr-6">
                <div className="absolute right-4 top-[7px] inline-flex justify-end items-center gap-14 pr-4">
                    <div className="flex justify-start items-center gap-10">
                        <div className="px-0.5 flex justify-center items-center gap-2.5">
                            <LinkText className="text-center text-header-text text-2xl font-normal leading-tight" href="/about">
                                about
                            </LinkText>
                        </div>
                        <div className="px-0.5 flex justify-center items-center gap-2.5">
                            <LinkText className="text-center text-header-text text-2xl font-normal leading-tight" href="/community">
                                community
                            </LinkText>
                        </div>
                        <div className="px-0.5 flex justify-center items-center gap-2.5">
                            <LinkText className="text-center text-header-text text-2xl font-normal leading-tight" href="/contact">
                                contact
                            </LinkText>
                        </div>
                    </div>
                    <div className="w-[50px] h-[50px] overflow-hidden avatar-rounded">

                        <ProfileIcon
                            imageUrl="/images/avatar.jpg"
                            href="/profile"
                        />
                    </div>
                </div>
                <div className="absolute left-8 top-[6px] inline-flex justify-center items-center gap-10">
                    <div className="px-0.5 flex justify-center items-center gap-2.5">
                        <LinkText className="text-center text-header-text text-5xl font-bold font-inter leading-[48px]" href="/home">
                            ORI
                        </LinkText>
                    </div>
                    {/* <div className="text-center text-4xl font-normal font-inter leading-9">text</div> */}
                </div>
            </div>
        </header>
    );
}
