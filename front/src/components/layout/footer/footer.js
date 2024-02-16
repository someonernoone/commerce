const footer = () => {
  return (
    <>
      <div style={{ transition: "all 0.5" }}>
        <div className="text-white justify-evenly flex  sm:flex-row flex-col bg-black">
          <div className="">
            <div className="flex flex-col justify-between">
              <div className="flex mx-auto flex-col items-center justify-center h-[200px]">
                <div className=" text-center font-bold hover:text-[#00f] text-2xl">
                  ECOMMERCE
                </div>
                <div className="text-xs">
                  <div>High Quality is our first priority</div>
                  <div>Copyrights 2024 &copy The Boss</div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:order-first">
            <div className="flex mx-auto  flex-col items-center justify-center h-[200px]">
              <div className="font-bold text-semibold">Download our app</div>
              <div className="font-semibold py-2 text-center max-w-[200px] text-sm">
                Download for the Android amd IOS mobile phone
              </div>
            </div>
          </div>

          <div className="flex py-4 justify-center h-[200px] items-center flex-col gap-2">
            <div className="font-bold text-lg pb-4 text-underline">
              Follow Us
            </div>
            <div className="social">
              <div className="text-center">Instrgram</div>
              <div className="text-center">Youtube</div>
              <div className="text-center">Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
