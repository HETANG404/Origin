import HorizontalCard from "../base_ui/horizontal_card";


export default function HorizontalCategories() {
    return (
        <section className="relative mt-6 mb-6 pb-6 pt-36">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-row flex-wrap gap-10 justify-center">
               {Array.from({ length: 12 }).map((_, i) => (
                           <HorizontalCard
                             key={i}
                             title={`Project ${i + 1}`}
                             subtitle="Next.js + Tailwind"
                             backgroundImage="/images/bg-card-01.jpg"
                             href={`/project/${i + 1}`}
                           />
                         ))}
            </div>
        </section>
    );
}
