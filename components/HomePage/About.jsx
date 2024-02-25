import React from "react";

const About = () => {
  return (
    <section className="h-[100vh]">
      <div className="px-[3%] ">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center h-[100vh]">
            <div className="text-2xl">About Us</div>
            <div className="text-6xl">
              I TRULY believe tea touches all our lives
            </div>
            <div className="mt-10 max-w-[55%] text-[28px] leading-8">
              Immerse yourself in our world of steeped opulence
            </div>
          </div>
          <div className="flex flex-col justify-center h-[100vh]">
            <div className="text-4xl max-w-[90%] ">
              In the moments the rain is pouring outside your doorstep, in the
              moments you share desserts at your favorite aunts house, with
              cookies after your first day at a new job, or on your drive to
              search for your new home, chilled during a hot summers afternoon,
              at the table of a loved one speaking of their cancer, the lazy
              morning you wake up in a new country, and in the moment you first
              realize how truly wonderful this day is.
            </div>
            <div className="text-[#757575] mt-2 text-sm max-w-[90%]">
              Tea starts us off, meets us in the middle, and dances us through
              to the end. May all your days be filled with health, happiness,
              love, laughter, and the simplest pleasures life has to offer, like
              a beautiful cup of tea. Thank you for allowing us to share in your
              life's wondrous moments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
