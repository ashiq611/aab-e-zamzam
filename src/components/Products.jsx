import bg from "../assets/zamzam/download-2.jpeg";
import pbolttle from "../assets/zamzam/landing-page-4.png";
const Products = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            src={bg}
            className="h-96 w-full opacity-30"
            alt="Background Image"
          />
          <div className="absolute inset-0 bg-sky-500 opacity-70"></div>
          <div className="container mx-auto absolute inset-0 flex items-center justify-center">
            {/* Your content goes here */}
            <p className="text-3xl text-center font-bold text-white">
              এটি এমন এক মহব্বতপূর্ণ পানি, যা সারা পৃথিবীর মুসলমান একবার হলেও
              পান করার জন্য উদগ্রীব থাকে, এ কারনেই প্রতিটি হাজিগণ ফেরার পথে
              প্রিয়জন সহ বহণের সামর্থানুযায়ী বেশি করে নিয়ে আসার চেষ্টা করেন, ঠিক
              সেই মোজেজাপূর্ণ জমজম পানিটি এখন পাচ্ছেন আপনার নিকটে!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative top-[-7%] md:top-[-7%] inset-x-0 flex items-center justify-center ">
        <img src={pbolttle} alt="" className="" />
      </div>
      <div className="container mx-auto text-center my-5">
        <h2 className="border-2 border-black text-4xl font-extrabold">
          প্রিয়জনকে উপহার দিতে এখনি সংগ্রহ করুন
        </h2>
        <div className="mt-5">
          <p className="text-red-500 font-semibold">
            Intact পলিতে ৫ লিটারের মূল্য- ৪৫০০ টাকা
          </p>
          <p className="text-red-500 font-semibold">
            ৩৩০ মিলির মূল্য- ৬০০ টাকা
          </p>
        </div>
        <h2 className="mt-5 text-3xl font-extrabold">
          প্রয়োজনে ফোন করুন 01320 654 264
        </h2>
      </div>
    </div>
  );
};

export default Products;
