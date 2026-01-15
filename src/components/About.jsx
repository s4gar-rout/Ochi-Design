import React from "react";
import homepageImg from "../assets/Images/Homepage-Photo.jpg";

const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="About-Wrapper w-full min-h-screen bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl pb-20"
      >
        <div className="para w-full px-10 py-20">
          <p className="font-[font2] text-[3.9vw] leading-[3.9vw]">
            We craft category-defining presentations, brand identities, and
            digital experiences that drive funding, sales, and market
            leadership.
          </p>
        </div>
        <div className="about-center w-full border-t-[0.9px] border-b-[0.9px] h-[55vh] border-zinc-700 flex justify-between px-10 py-5">
          <div className=" w-[40%]">
            <h1>What you can expect:</h1>
          </div>
          <div className="w-[22%] flex flex-col gap-[2vw] ">
            <p>
              We don't just make slides. We shape strategy, storytelling, design
              scalable brand systems, and build presentations that make people
              say: "I want in!"
            </p>
            <p>
              Our clients make the world go round – from deep tech, aerospace
              and robotics to music festivals and Michelin-starred restaurants.
            </p>
            <p>
              Since 2019, we've been the go-to partner for Yahoo, Medallia,
              Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
            </p>
          </div>
          <div className="flex flex-col justify-end pb-[5vw] w-[18%]">
            <h1>S:</h1>
            {["instagram", "behance", "facebook", "linkedin"].map(
              (item, idx) => {
                return <h1 className="capitalize">{item}</h1>;
              }
            )}
          </div>
        </div>
        <div className="about-last w-full h-[70vh] flex gap-[2vw] py-5 px-10 ">
          <div className="w-1/2">
            <h1 className="font-[font2] text-[3.8vw]">How we can help:</h1>
            <button className="px-7 py-4 bg-black text-white rounded-full flex items-center gap-[1vw]">
              <h1 className="text-[1vw] uppercase">Read more </h1>
              <div className="h-2 w-2 bg-white rounded"></div>
            </button>
          </div>
          <div className="w-1/2 bg-red-300 rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={homepageImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
