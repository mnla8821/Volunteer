const SlideBar = () => {
  return (
    <div className="h-[100vh] ">
      <div className="h-[120vh]  pt-8  ">
        <div
          className="h-[100%]  w-full  bg-cover bg-center flex justify-evenly items-center"
          style={{
            "background-image": "var(--rectangle)",
          }}
        >
          <div className="bg-[var(--mid-blue)] w-[20%] h-80 rounded-2xl flex justify-center items-center flex-col">
            <h1 className=" text-3xl font-bold text-white py-3 px-12  uppercase">
              دعم إنساني
            </h1>
            <p className="font-normal py-4 px-15 text-right text-[var(--white-blue)] leading-7">
              نعمل على توفير المساعدات الطبية لحالات إنسانية من متبرعين، لتحقيق
              أفضل النتائج والمساعدة الفعلية.
            </p>
          </div>
          <div className="bg-[var(--mid-blue)] w-[20%] h-80 rounded-2xl flex justify-center items-center flex-col">
            <h1 className=" text-3xl font-bold text-white py-3 px-9 uppercase text-center">
              استشارات طبية و ورشات عمل
            </h1>
            <p className="font-normal py-4 px-15 text-right text-[var(--white-blue)] leading-7">
              تُتاح لك الفرصة للحصول على استشارات طبية مهنية بكل خصوصية وأمان،
              ودورات تدريبية في الصحة وبمشاركة نخبة من الأطباء والاختصاصيين.
            </p>
          </div>
          <div className="bg-[var(--mid-blue)] w-[20%] h-80 rounded-2xl flex justify-center items-center flex-col">
            <h1 className=" text-3xl font-bold text-white py-3 px-12  uppercase text-center">
              دورات تدريبية مجانية
            </h1>
            <p className="font-normal py-4 px-15 text-right text-[var(--white-blue)] leading-7">
              نقدم مجموعة متنوعة من الدورات بإشراف مدربين مختصين، لتعزيز قدراتك
              في مختلف المجالات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
