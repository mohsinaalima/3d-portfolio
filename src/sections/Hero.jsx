import { words } from "../constants/index.js";

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 z-0'>
        <img
          src='/images/bg.png'
          alt='background'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 hero-layout'>
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                Shaping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className='flex items-center md:gap-3 gap-1 pb-2'
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* Words Section */}
            <div className='flex gap-6 mt-6'>
              {words.map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <img src={item.imgPath} alt={item.text} className='w-6 h-6' />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
