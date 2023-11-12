import heropic from "../assets/zamzam/landing-page-4.png";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover">
      <div className="text-center container mx-auto py-5">
        <h2 className="text-lg font-bold mt-2">
          ☆জমজম পানি(Intact)☆ আল্লাহর এক অনন্য নেয়ামত যা পৃথিবীর সকল পানির মধ্যে
          শ্রেষ্ঠ
        </h2>
        <h2 className="mt-5 text-3xl font-bold">
          🕋 এটি অত্যন্ত বরকতময়, মর্যাদাপূর্ণ এবং বহুমূখী কল্যানকামী পানীয়
        </h2>
        <div className="flex md:flex-nowrap flex-wrap mt-10">
          <div className="left">
            <img src={heropic} alt="pani" />
          </div>
          <div className="right text-start">
            <h2>
              🔷 রাসূল (সা.) বলেন, ‘জমজমের পানি বরকতময়, স্বাদ অন্বেষণকারীর
              খাদ্য।’ -(সহিহ মুসলিম, হাদিস : ২৪৭৩)
            </h2>
            <h2>
              🔷 রাসুলুল্লাহ (সা.) বলেন, ‘ভূপৃষ্ঠের সবচেয়ে উৎকৃষ্ট ও কল্যাণকর
              পানি জমজমের পানি। এ পানি ক্ষুধার্তের জন্য খাদ্য এবং রোগীর জন্য
              শেফাস্বরূপ।
            </h2>
            <h2>
              🔷 নবী মুহাম্মদ (সা.) এর একজন সাহাবী বলেছেন, আমরা এটিকে আল-শাব্বা
              (সন্তুষ্টিজনক) বলতাম এবং এটি আমাদের পরিবারের যত্ন নিতে সাহায্য
              করেছিল। (আল-সিলসিলাত আল-সহীহাহ লিল-আলবানি, 2685)
            </h2>
            <button className="my-5 px-5 py-2 rounded-md bg-sky-500 text-white font-semibold">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
