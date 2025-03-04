import logo from "../../assets/Images/Home/logo.jpg";
const Header = () => {
  return (
    <div className="flex justify-center items-center bg-[var(--white-blue)] h-32 max-h-32">
      <ul className="flex justify-evenly items-center w-full ">
        <li className="cursor-pointer text-2xl text-[var(--blue)] bg-white font-bold rounded-full w-20 h-20 flex justify-center items-center">
          En
        </li>
        <li className="cursor-pointer text-2xl text-[var(--white-blue)] bg-[var(--blue)] p-4 rounded-3xl font-bold">
          تسجيل الدخول
        </li>
        <li className="cursor-pointer text-2xl text-[var(--blue)] font-bold">
          تواصل معنا
        </li>
        <li className="cursor-pointer text-2xl text-[var(--blue)] font-bold">
          تصفح المسارات
        </li>
        <li className="cursor-pointer text-2xl text-[var(--blue)] font-bold">
          الرئيسية
        </li>
        <li className="cursor-pointer text-2xl text-[var(--blue)] font-bold">
          <img
            src={logo}
            className="rounded-2xl"
            width="120px"
            height="120px"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
