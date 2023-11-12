
import bottle from "../assets/zamzam/zamzam-1.png";
const Benefits = () => {
    return (
      <div>
        <div>
          <h2 className="w-full my-10 border-double border-4 border-black text-center text-2xl font-extrabold shadow-2xl shadow-black">
            জমজম পানির উপকারিতা
          </h2>
          <div className="flex justify-between flex-wrap md:flex-nowrap">
            <div className="left flex flex-col justify-evenly">
              <div>
                <h2 className="text-sky-500 font-bold text-5xl">☆</h2>
                <h2>কুদরতপূর্ণ </h2>
                <p>আল্লাহর কুদরতের বাস্তব নিদর্শন ও অশেষ কল্যাণকর </p>
              </div>
              <div>
                <h2 className="text-sky-500 font-bold text-5xl">☆</h2>
                <h2>হাদিয়া প্রদানে উত্তম </h2>
                <p>
                  পৃথিবীর শ্রেষ্ঠ, সবচেয়ে রহমত ও বরকতপূর্ণ জমজম পানি, যেটি
                  হাদিয়া পেলে যেকোনো আপনজন অত্যন্ত খুশি হবেন
                </p>
              </div>
            </div>
            <div className="middle">
              <img src={bottle} alt="" />
            </div>
            <div className="right flex flex-col justify-evenly">
              <div>
                <h2 className="text-sky-500 font-bold text-5xl">☆</h2>
                <h2>পৃথিবীর সেরা পানি </h2>
                <p>
                  জমজমের এক ফোঁটা পানির যে নিজস্ব খনিজ গুণাগুণ আছে, তা পৃথিবীর
                  অন্য কোনো পানির নেই
                </p>
              </div>
              <div>
                <h2 className="text-sky-500 font-bold text-5xl">☆</h2>
                <h2>স্বাস্থ্য উপকারী </h2>
                <p>
                  এ পানিতে যেসব উপাদান রয়েছে তা মানুষের খাদ্য, পুষ্টি ও রোগ
                  নিরাময়কারী
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Benefits;