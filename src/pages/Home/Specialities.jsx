import React from "react";
import { Link } from "react-router-dom";

export default function Specialities() {
  const data = [
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
    {
      name: "Common Cardiac Ailments",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam impedit earum eum reiciendis ab ea aperiam voluptas nihil sunt dolores!",
      img: "public/assets/images/specailities/Cosmetic.png",
      link: "common-cardiac-ailments",
    },
  ];
  return (
    <section
      id="Home-Specialities"
      className="w-full bg-[#700619] flex flex-col justify-center items-center py-20"
    >
      <div className="w-11/12 flex flex-col gap-4 md:items-center">
        <p className="Specialities-title">Featured Specialties</p>
        <p className="Specialities-description">
          Connect with experienced world-class doctors for exceptional services
          across different specialities
        </p>
        <div className="flex items-center flex-wrap justify-between mt-10 md:flex-col w-full gap-6">
          {data.map((item, index) => (
            <div className="Home-Specialities-card" key={index}>
              <div className="flex gap-2 items-center">
                <img
                  src={item.img}
                  alt={item.name}
                />
                <p className="Home-Specialities-card-title">{item.name}</p>
              </div>
              <p className="Home-Specialities-card-description">{item.desc}</p>
              <Link
                to={`/Speciality/${item.link}`}
                className="flex items-center Home-Specialities-card-link mt-4"
              >
                READ MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M8.35938 2.96484L14 8.60542L8.35938 14.246"
                    stroke="white"
                    strokeWidth="1.12002"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.9999 8.60547L2 8.60547"
                    stroke="white"
                    strokeWidth="1.12002"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
