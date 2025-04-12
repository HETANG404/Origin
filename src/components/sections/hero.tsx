import RedButton from "../base_ui/red_button";



export default function HeroHome() {
    return (
        <section className="relative">

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-6 pt-32 md:pb-6 md:pt-40">
                    {/* Section header */}
                    <div className="pb-6 text-center">
                        <h1
                            className="mb-6 border-y border-transparent text-5xl font-extrabold leading-tight tracking-tight text-body-text md:text-6xl "
                            data-aos="zoom-y-out"
                            data-aos-delay={25}
                        >
                            Coding, creating, and occasionally <br className="max-lg:hidden" />
                            obsessing over tiny details.
                        </h1>
                    </div>

                    <div
                        className="mx-auto my-6 h-px w-300 border-t-2 border-transparent [border-image:linear-gradient(to_right,transparent,var(--foreground),transparent)1]"
                        data-aos="zoom-y-out"
                        data-aos-delay={800}
                    />


                    <div className="pb-12 text-center">
                        <h2
                            className="text-6xl font-medium text-body-text leading-relaxed tracking-wide"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            Glad you&apos;re here.
                        </h2>
                    </div>
                    <div>
                        <div className="relative before:absolute before:inset-0">
                            <div
                                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-12"
                                data-aos="zoom-y-out"
                                data-aos-delay={250}
                            >
                                <RedButton href="/about" className="bg-transparent">more about me</RedButton>
                                <RedButton href="/contact" className="bg-transparent">contact me</RedButton>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section >
    );
}
