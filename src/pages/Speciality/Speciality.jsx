import React from "react";
import "./Speciality.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Speciality() {
  const { speciality } = useParams();
  const data = [
    { name: "Fertility" },
    { name: "Cosmetic" },
    { name: "Dentistry" },
    { name: "Dermatalogy" },
    { name: "Gynecology" },
    { name: "Orthopaedics" },
    { name: "Opthalmology" },
    { name: "Wellness" },
  ];
  return (
    <div
      className="Speciality flex gap-8 items-center justify-center w-full"
      id="Speciality"
    >
      <section className="w-full bg-[#700619] flex flex-col justify-center items-center py-20">
        <div className="w-11/12 flex flex-col gap-4 md:items-cente">
          <p className="Speciality-title">Featured Specialties</p>
          <p className="Speciality-description">
            Connect with experienced world-class doctors for exceptional
            services across different Speciality
          </p>
          <div className="flex items-center flex-wrap justify-between mt-10 md:flex-col w-full gap-6">
            {data.map((item, index) => (
              <div className="Speciality-card" key={index}>
                <div className="flex gap-2 items-center">
                  <img
                    src={`./assets/images/specailities/${item.name}.png`}
                    alt={item.name}
                  />{" "}
                  <p className="Speciality-card-title">{item.name}</p>
                </div>
                <p className="Speciality-card-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam impedit earum eum reiciendis ab ea aperiam voluptas
                  nihil sunt dolores!
                </p>
                <Link
                  to={`/Speciality/${item.name}`}
                  className="flex items-center Speciality-card-link mt-4"
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
    </div>
  );
}
