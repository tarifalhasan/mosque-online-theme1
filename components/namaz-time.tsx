import { NamazTimeingsData } from "@/constant/data";

const NamazTime = () => {
  return (
    <section id="namaz_time" className=" px-5 ">
      <div>
        <p className="sub-heading text-center ">Associated Mosque</p>
        <h2 className="heading1 text-center">Namaz Timings</h2>
      </div>
      <div className={`grid  sm:grid-cols-3 gap-6 xl:grid-cols-6`}>
        {NamazTimeingsData.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-[#EFFFFE]"
                  : index === 5
                  ? "bg-[#13BBB4]"
                  : "bg-white"
              } p-5`}
            >
              <div className="card">
                <h2
                  className={`text-[1.75em] font-bold ${
                    index === 5 && "text-white"
                  }`}
                >
                  {item.name}
                </h2>
                <ul className={`${index === 5 && "text-white"}`}>
                  <li className="text-lg font-bold"> Begins:{item.Begins}</li>
                  <li className="text-lg font-bold"> Iqamah:{item.Iqamah}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NamazTime;
