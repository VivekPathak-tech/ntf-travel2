import React from "react";

const FeaturedTours = () => {
    const tours = [
        {
            image: "src/assets/europe.jpg",
            label: "Top Europe",
            title: "Experience the Great Holiday on Beach",
        },
        {
            image: "src/assets/thailand.jpg",
            label: "Top Thailand",
            title: "Summer Holiday to the Oxolotan River",
        },
        {
            image: "src/assets/kerala.jpg",
            label: "Top Kerala",
            title: "Santorini Island's Weekend Vacation",
        },
    ];

    return (
        <section className="py-14 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-lg font-medium font-StyleFont text-customOrange flex justify-center items-center gap-2">
                        <span className="inline-block relative -left-1 mt-1 w-2 h-[2px] bg-customOrange before:absolute before:-left-3 before:w-2 before:h-[2px] before:bg-customOrange "></span>
                        <span className="inline-block relative ml-1 mt-1 w-10 h-[2px] bg-customOrange before:absolute before:right-11 before:w-2 before:h-[2px] before:bg-customOrange "></span>
                        Featured Tours
                        <span className="inline-block relative ml-1 mt-1 w-10 h-[2px] bg-customOrange before:absolute before:left-11 before:w-2 before:h-[2px] before:bg-customOrange "></span>
                        <span className="inline-block relative ml-2 mt-1 w-2 h-[2px] bg-customOrange before:absolute before:left-3 before:w-2 before:h-[2px] before:bg-customOrange "></span>
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Most Popular Tours
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Discover amazing places at exclusive deals. Explore top destinations, enjoy curated experiences, and book your next journey.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tours.map((tour, idx) => (
                        <div
                            key={idx}
                            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300" />
                            <div className="absolute bottom-4 left-4 text-white z-10">
                                <div className="text-sm bg-white text-black px-3 py-1 rounded-full mb-2 inline-block font-medium">
                                    {tour.label}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold leading-snug max-w-xs">
                                    {tour.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
