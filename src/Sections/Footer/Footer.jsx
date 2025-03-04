import left from "../../assets/Images/Footer/left.png";
import right from "../../assets/Images/Footer/right.png";

const Footer = () => {
  return (
    <div className="w-full h-[250vh]">
      <div className="w-full h-[17%]  flex justify-between items-center">
        <img src={left} alt="" />
        <h1 className="text-4xl text-[var(--blue)] font-bold w-120 text-center">
          تعرف أكثر على المنظمة وذلك من خلال التعرف على
        </h1>
        <img src={right} alt="" />
      </div>
      <div className=" w-full h-[23%] flex justify-evenly items-center">
        <div className="w-70 h-70 rounded-[50%] bg-[var(--light-blue)] font-bold text-4xl flex justify-center items-center">
          الإستراتيجيات
        </div>
        <div className="w-70 h-70 rounded-[50%] bg-[var(--light-blue)] font-bold text-4xl flex justify-center items-center">
          الأهداف
        </div>
      </div>
      <div className="w-full h-[40%] "></div>
      <div
        className="w-full h-[30%]  bg-cover flex justify-between"
        style={{
          "background-image": "var(--rectangle-footer)",
        }}
      >
        <div className="w-full  h-full flex justify-center items-center underline text-white text-2xl font-bold">
          <p className="cursor-pointer">منصة المبدع العربي</p>
        </div>
        <div className="w-full  h-full flex flex-col justify-center items-end pr-34 pt-16  underline text-white text-2xl font-bold">
          <p className="pt-9 cursor-pointer">الرئيسية</p>
          <p className="pt-9 cursor-pointer">ميزات المنصة</p>
          <p className="pt-9 cursor-pointer">مجالات الكورسات المتاحة</p>
          <p className="pt-9 cursor-pointer">الأهداف -الاستراتيجيات</p>
          <p className="pt-9 cursor-pointer">رؤيتنا</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
