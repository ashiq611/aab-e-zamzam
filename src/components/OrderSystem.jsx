import fivebottle from "../assets/zamzam/zamzam-1-150x150.png";

const OrderSystem = () => {
  return (
    <div>
      <div className="flex gap-5 justify-center">
        <div className="card p-5 bg-slate-100 border border-sky-500">
          <div className="left">
            <div className="img">
              <img src={fivebottle} alt="" />
            </div>
          </div>
          <div className="right ">
            <h2>Zamzam 5 liter(Intact Poly)</h2>
            <p>btd 600</p>
            <button className="px-5 py-2 rounded-lg bg-teal-500 font-bold text-lg">Add to Cart</button>
          </div>
        </div>

        <div className="card p-5 bg-slate-100 border border-sky-500">
          <div className="left">
            <div className="img">
              <img src={fivebottle} alt="" />
            </div>
          </div>
          <div className="right ">
            <h2>Zamzam 5 liter(Intact Poly)</h2>
            <p>btd 600</p>
            <button className="px-5 py-2 rounded-lg bg-teal-500 font-bold text-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSystem;
