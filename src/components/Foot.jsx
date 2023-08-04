const Foot = () => {
  return (
    <div className="flex w-full h-full bg-white-1 p-3 xs:p-5 lg:py-10 lg:px-14">
      <article className=" md:px-5 w-5/12">
        <h1 className="md:text-lg tracking-widest mb-3 font-bold font-2">
          ShopCart
        </h1>
        <p className=" tracking-wider text-sm opacity-60">
          Specializes in providing hight-quality, stylish products for your
          wardrobe
        </p>
      </article>
      <article className=" grid grid-cols-2 md:grid-cols-4 gap-y-5 w-7/12 gap-x-3 sm:gap-x-7 md:px-7">
        <section className="">
          <h2 className=" heading-3 mb-3">shop</h2>
          <ul className=" flex flex-col gap-2 text-sm opacity-60">
            <li className=" select-none cursor-pointer">All Collections</li>
            <li className=" select-none cursor-pointer">Winter Edition</li>
            <li className=" select-none cursor-pointer">Discount</li>
          </ul>
        </section>
        <section className="">
          <h2 className=" heading-3 mb-3">company</h2>
          <ul className=" flex flex-col gap-2 text-sm opacity-60">
            <li className=" select-none cursor-pointer">About Us</li>
            <li className=" select-none cursor-pointer">Contact</li>
            <li className=" select-none cursor-pointer">Affiliates</li>
          </ul>
        </section>
        <section className="">
          <h2 className=" heading-3 mb-3">support</h2>
          <ul className=" flex flex-col gap-2 text-sm opacity-60">
            <li className=" select-none cursor-pointer">FAQs</li>
            <li className=" select-none cursor-pointer">Cookie Policy</li>
            <li className=" select-none cursor-pointer">Terms of Use</li>
          </ul>
        </section>
        <section className="">
          <h2 className=" heading-3 mb-3">payment methods</h2>
          <ul className=" flex items-center gap-3">
            <li className=" select-none cursor-pointer">
              <img className=" w-7" src="/png/visa.png" alt="" />
            </li>
            <li className=" select-none cursor-pointer">
              <img
                className=" w-14 h-5 object-cover"
                src="/png/paypal.png"
                alt=""
              />
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Foot;
