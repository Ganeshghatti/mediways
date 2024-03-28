import React, { useEffect, useState } from "react";
import "./Speciality.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Speciality() {
  const { speciality } = useParams();
  const [selectedSpeciality, setselectedSpeciality] = useState();
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  const [specailities, setspecailities] = useState([
    {
      link: "common-cardiac-ailments",
      name: "Common Cardiac Ailments",
      desc: "India has emerged as a leading destination for cardiac treatment, offering world-class medical facilities, renowned cardiologists, and advanced technologies at a fraction of the cost compared to many Western countries. From routine procedures to complex surgeries, India provides comprehensive cardiac care tailored to individual needs.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "./assets/images/MedicineInIndiaimgphone.png",
      faq: [
        {
          question: "What is cardiology?",
          answer:
            "Cardiology is the branch of medicine that deals with the study, diagnosis, and treatment of disorders related to the heart and blood vessels (the cardiovascular system).",
        },
        {
          question: "What are the risk factors for heart disease?",
          answer:
            "Risk factors for heart disease include high blood pressure, high cholesterol, smoking, diabetes, obesity, sedentary lifestyle, family history of heart disease, and age.",
        },
        {
          question: "How is heart disease diagnosed?",
          answer:
            "Heart disease can be diagnosed through various tests such as electrocardiogram (ECG/EKG), echocardiogram, stress test, cardiac catheterization, and blood tests to measure cardiac enzymes and biomarkers.",
        },
        {
          question: "What are the treatment options for heart disease?",
          answer:
            "Treatment options for heart disease depend on the specific condition but may include lifestyle modifications (diet, exercise, smoking cessation), medications (such as statins, beta-blockers, and ACE inhibitors), procedures (angioplasty, stent placement, bypass surgery), and in severe cases, heart transplantation.",
        },
      ],
      specifications_and_benifits: [
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "Cutting-edge technology:           ",
          desc: "Indian hospitals are equipped with the latest diagnostic and therapeutic equipment, ensuring precise diagnosis and effective treatment",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "Experienced specialists",
          desc: "Cardiologists in India are renowned globally for their expertise and dedication to patient care.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "Cost-effectiveness",
          desc: "Cardiac treatment in India is significantly more affordable compared to many Western countries, without compromising on quality or safety.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "Personalized care",
          desc: " Patients receive individualized treatment plans and compassionate support throughout their medical journey.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "Seamless experience",
          desc: "Many hospitals in India offer assistance with travel arrangements, accommodation, and visa facilitation for international patients.",
        },
      ],
    },
  ]);

  useEffect(() => {
    for (let i = 0; i < specailities.length; i++) {
      if (speciality == specailities[i].link) {
        setselectedSpeciality(specailities[i]);
      }
    }
  }, [speciality]);
  return (
    <div
      className="Speciality flex gap-8 items-center justify-center w-full flex-col"
      id="Speciality"
    >
      {selectedSpeciality && selectedSpeciality.name && (
        <>
          <div className="relative w-full flex items-end justify-center">
            <img
              src={selectedSpeciality.full_screen_img_pc}
              alt={selectedSpeciality.name}
              className="object-cover w-full object-top md:hidden"
              style={{ height: "95vh" }}
            />{" "}
            <img
              src={selectedSpeciality.full_screen_img_phone}
              alt={selectedSpeciality.name}
              className="object-cover w-full hidden md:block"
              style={{ height: "95vh" }}
            />
            <div className="flex flex-col absolute px-8 md:gap-4 md:py-6 md:w-11/12 py-4 items-center Speciality-div">
              <p className="Speciality-div-title">{selectedSpeciality.name}</p>
              <p className="Speciality-div-title-subheading">
                {selectedSpeciality.desc}
              </p>
            </div>
          </div>
          <div className="w-4/5 md:w-11/12 flex flex-col gap-6 py-12">
            <p className="Speciality-title">Our Service</p>
            <p className="Speciality-description">
              India is home to world-class internationally accredited healthcare
              institutions that offer an innovative and integrated care model,
              providing patients with a fulfilling experience. The highly
              advanced infrastructure of healthcare service providers covers a
              wide range of specialties, including elective procedures in
              cosmetic treatment & surgery, orthopedics and sports medicine,
              ophthalmology, dental, dermatology, wellness and preventive health
              check-ups, as well as assisted reproductive techniques and weight
              loss management and surgeries. Not only does India boast
              impressive infrastructure, but it also offers a pool of skilled
              and licensed healthcare professionals who have established
              themselves as leaders in their respective fields globally.
            </p>
          </div>
          <div className="w-4/5 md:w-11/12 flex flex-col gap-12 py-12">
            <p className="Speciality-title">
              <span className="text-[#700619] font-semibold">Frequently </span>
              asked Questions
            </p>
            <div className="w-full flex flex-col gap-6 Speciality-faq">
              {selectedSpeciality.faq.map((item, index) => (
                <Accordion
                  expanded={expandedPanel === index}
                  onChange={handleChange(index)}
                  className="p-2"
                >
                  <AccordionSummary
                    expandIcon={
                      expandedPanel === `panel${index}-` ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )
                    }
                    aria-controls={`panel${index}-a-content`}
                    id={`panel${index}-a-header`}
                  >
                    <p className="Speciality-faq-question"> {item.question}</p>
                  </AccordionSummary>
                  <AccordionDetails className="Speciality-faq-answer">
                    {item.answer}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
          <div className="flex gap-10 w-4/5 md:w-11/12 py-12 flex-col items-center">
            <p className="Speciality-title">
              Specifications and
              <span className="text-[#700619] font-semibold"> Benefits</span>
            </p>{" "}
            <div className="flex md:flex-col flex-wrap w-full justify-between md:justify-center gap-y-6">
              {selectedSpeciality.specifications_and_benifits.map(
                (item, index) => (
                  <div className="blog-card">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full object-cover"
                    />
                    <p className="blog-card-title">{item.title}</p>
                    <p className="blog-card-description">{item.desc}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
