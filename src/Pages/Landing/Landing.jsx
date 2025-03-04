import homeImg from "../../assets/Images/Home/home.jpg";
import { Button } from "../../Component";
const Landing = () => {
  return (
    <div className="w-full h-full  bg-gradient-to-b from-[var(--mid-blue)] from-8%  via-[var(--light-blue)] via-90%   to-white to-2%  flex flex-col  items-center relative">
      <div className="w-full  h-[100vh] flex items-center">
        <div className=" w-full h-fit flex justify-center items-center">
          <img src={homeImg} alt="" className="w-[70%] h-[70%]  rounded-full" />
        </div>
        <div className=" w-full h-fit flex flex-col justify-center items-center">
          <h1 className="text-[var(--white-blue)] text-[40px] font-bold p-6">
            ! مرحبًا بكم في منصة المبدع العربي
          </h1>
          <p className="text-[var(--white-blue)] text-2xl py-5 px-22 rtl font-bold leading-11">
            حيث نجتمع لنزود أنفسنا بالعلم ونطور مهاراتنا ونتبادل الأفكار
            والخبرات إيمانًا برسالتنا "وَقُل رَبِّي زِدْنِي عِلْمًا".
            <br />
            تسعى منصتنا التعليمية الإلكترونية المجانية، التي أسسها فريق من
            الشباب الملتزمين بالإنسانية وحب الخير، إلى تقديم بيئة تعلّم متميزة.
          </p>
          <Button>إبدأ رحلتك معنا</Button>
        </div>
      </div>
      <div className="bg-[var(--white-blue)] border-4 border-[var(--light-blue)] w-[85%] h-[25%] rounded-2xl p-2 flex justify-around   ">
        <div className="w-fit  flex flex-col justify-center items-center">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-4 text-center h-[40%]">
            أحصل على الشهادة
          </h3>
          <p className="font-normal h-[50%] flex items-center text-xl text-center   px-6 py-4 ">
            لتعزيز فرصك في مسيرتك المهنية
          </p>
        </div>
        <div className=" w-[20%] flex flex-col justify-center items-center">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%]">
            اختبر
          </h3>
          <p className="font-normal h-[50%] flex items-center text-xl  px-6 text-center">
            معلوماتك من خلال الامتحانات الدورية
          </p>
        </div>
        <div className=" w-[20%]  flex flex-col justify-center items-center">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%]">
            تعلم
          </h3>
          <p className="font-normal h-[50%] flex items-center text-xl  px-10 text-center">
            مع أكفأ المدربين
          </p>
        </div>
        <div className=" w-[20%]  flex flex-col justify-center items-center">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%]">
            إنضم
          </h3>
          <p className="font-normal h-[50%] flex items-center text-xl  px-10 text-center">
            إلى الكورس الذي يهمك
          </p>
        </div>
        <div className=" w-[20%]  flex flex-col justify-center items-center">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%]">
            تصفح
          </h3>
          <p className="font-normal h-[50%] flex items-center text-xl  px-10 text-center">
            الكورسات المتنوعة
          </p>
        </div>
        <div className=" w-[40%]  flex  justify-center items-center">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3  flex justify-center items-center h-[100%]">
            ! إبدأ رحلتك في طريق الإبداع
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
