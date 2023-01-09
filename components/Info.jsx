const Info = () => {
  return (
    <div className="px-6 py-20 text-center font-josefin-sans lg:flex lg:items-end lg:justify-between  lg:gap-16 lg:px-16 lg:py-32 xl:px-32">
      <div className="mb-8 h-[14rem] w-full  bg-info-img-mobile bg-cover bg-center bg-no-repeat min-[440px]:h-[20rem] sm:h-[32rem]  lg:mb-0 lg:h-[30rem] lg:w-[180rem]  lg:bg-info-img-desktop lg:bg-cover"></div>

      <div className="lg:text-left">
        <p className="mb-4 text-3xl lg:mb-6 lg:text-5xl">THE LEADER IN INTERACTIVE VR</p>
        <p className="mx-auto w-[90%] font-semibold md:text-xl lg:w-full ">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best
          companies around the globe. Our award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Info;
