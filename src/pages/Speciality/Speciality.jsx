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
  console.log(speciality);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  const [specailities, setspecailities] = useState([
    {
      link: "cardiac",
      name: "Cardiac",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      about:
        "India has emerged as a leading destination for cardiac treatment, offering world-class medical facilities, renowned cardiologists, and advanced technologies at a fraction of the cost compared to many Western countries. From routine procedures to complex surgeries, India provides comprehensive cardiac care tailored to individual needs.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
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
        {
          question: "What is the role of a cardiologist?",
          answer:
            "A cardiologist is a medical doctor who specializes in diagnosing and treating heart and blood vessel diseases. They are trained to interpret various diagnostic tests and recommend appropriate treatments tailored to each patient's needs.",
        },
        {
          question: "How can I prevent heart disease?",
          answer:
            "To prevent heart disease, it's important to maintain a healthy lifestyle by eating a balanced diet, exercising regularly, maintaining a healthy weight, avoiding smoking, limiting alcohol intake, managing stress, and getting regular check-ups with your healthcare provider.",
        },
        {
          question: "What should I do in case of a heart attack?",
          answer:
            "In case of a heart attack, it's crucial to seek emergency medical help immediately by calling emergency services (such as 911 in the United States). While waiting for help, you can assist the person by having them sit or lie down, loosening tight clothing, and administering aspirin if available and not contraindicated.",
        },
        {
          question:
            "Are there any lifestyle changes I can make to improve my heart health?",
          answer:
            "Yes, adopting a heart-healthy lifestyle can significantly improve heart health. This includes eating a diet rich in fruits, vegetables, whole grains, and lean proteins, exercising regularly, quitting smoking, limiting alcohol consumption, managing stress, and maintaining a healthy weight.",
        },
        {
          question:
            "How can I find a cardiologist or cardiac care facility in India?",
          answer:
            "You can find a cardiologist or cardiac care facility in India by consulting with your primary care physician for recommendations, researching online directories of hospitals and clinics, or contacting medical tourism agencies that specialize in arranging healthcare services in India.",
        },
      ],
      specifications_and_benifits: [
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "Cutting-edge technology",
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
    {
      link: "liver-transplantation",
      name: "Liver Transplantation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "Liver transplantation is a surgical procedure where a diseased or damaged liver is replaced with a healthy liver from a donor. This procedure is typically performed on patients with end-stage liver disease or acute liver failure and offers a chance for improved quality of life and prolonged survival.",
      specifications_and_benifits: [
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "1. Patient Evaluation",
          desc: "Patients undergo a thorough evaluation by a transplant team to determine if they are suitable candidates for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and psychosocial assessment.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "2. Donor Selection",
          desc: "Donors can be living or deceased. Living donors are typically family members or individuals willing to donate a portion of their liver. Deceased donors are individuals who have consented to organ donation or whose families have consented after their death.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "3. Pre-transplant Preparation",
          desc: "Patients undergo pre-transplant medical optimization to ensure they are in the best possible health for surgery. This may include managing underlying medical conditions, such as hepatitis or cirrhosis.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "4. Matching and Compatibility",
          desc: "Compatibility between donor and recipient is assessed through blood tests and tissue typing to minimize the risk of rejection. ABO blood group compatibility is crucial, and cross-matching is performed to assess compatibility further.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "5. Surgical Procedure",
          desc: "Liver transplant surgery involves removing the diseased liver (total or partial) and implanting the donor liver. The new liver is typically placed in the upper abdomen and connected to the patient's blood vessels and bile ducts.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "6. Post-operative Care",
          desc: "Patients require intensive care and close monitoring in the immediate post-operative period to prevent complications and ensure proper functioning of the transplanted liver. Immunosuppressive medications are prescribed to prevent rejection of the donor organ.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "7. Immunosuppression",
          desc: "Patients need to take immunosuppressive medications for life to prevent rejection. These medications suppress the immune system to prevent it from attacking the transplanted liver.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "8. Recovery and Rehabilitation",
          desc: "Patients undergo a period of recovery in the hospital followed by ongoing monitoring as an outpatient. Rehabilitation may include dietary modifications, medication management, and lifestyle changes.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "9. Long-term Follow-up",
          desc: "Long-term follow-up is essential to monitor liver function, manage complications, and adjust medications as needed. Regular visits to the transplant center are scheduled for monitoring and support.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "10. Complications and Risks",
          desc: "Complications can include rejection, infection, bile duct complications, and side effects of immunosuppressive medications. Close monitoring and prompt intervention are crucial for managing complications.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "11. Success Rates",
          desc: "Liver transplantation has high success rates, with most patients experiencing improved quality of life and long-term survival. Success rates vary depending on factors such as donor-recipient compatibility, underlying liver disease, and overall health.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "12. Cost and insurance",
          desc: "Liver transplantation can be expensive, including pre-transplant evaluation, surgery, post-operative care, and lifelong medication costs. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team",
        },
      ],
    },
    {
      link: "bone-marrow-transplant",
      name: "Bone Marrow Transplantation",
      desc: "Bone marrow transplant, also known as hematopoietic stem cell transplant (HSCT), is a procedure where diseased or damaged bone marrow is replaced with healthy stem cells.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "Bone marrow transplantation is used to treat various conditions, including leukemia, lymphoma, multiple myeloma, and certain genetic disorders. Here's a comprehensive overview of bone marrow transplantation:",
      specifications_and_benifits: [
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "1. Patient Evaluation",
          desc: "Patients undergo a comprehensive evaluation by a transplant team to determine if they are suitable candidates for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and assessment of overall health.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "2. Donor Selection",
          desc: "Donors for allogeneic transplants are typically family members or unrelated donors who are HLA-matched to the recipient. Donors undergo testing to ensure compatibility, including blood tests and HLA typing. For autologous transplants, the patient's own stem cells are collected and stored prior to high-dose chemotherapy or radiation therapy.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "3. Pre-transplant Conditioning",
          desc: "Prior to transplantation, patients may undergo conditioning therapy, which involves chemotherapy and/or radiation therapy to destroy diseased cells and suppress the immune system. Conditioning therapy helps create space in the bone marrow for the transplanted cells and reduces the risk of rejection.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "4. Stem Cell Collection",
          desc: "For allogeneic transplants, stem cells are collected from the donor's bone marrow or peripheral blood using apheresis. For autologous transplants, the patient's stem cells are collected from their own blood or bone marrow prior to conditioning therapy.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "5. Transplant Procedure",
          desc: "The transplant procedure involves infusing the collected stem cells into the patient's bloodstream through a central venous catheter. The stem cells travel to the bone marrow, where they engraft and begin producing healthy blood cells.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "6. Engraftment and Recovery",
          desc: "Engraftment refers to the successful establishment of the transplanted cells in the patient's bone marrow. Patients undergo a period of recovery in the hospital, during which they are closely monitored for signs of engraftment, infection, and other complications.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "7. Post-transplant Care",
          desc: "Patients require ongoing monitoring and supportive care to prevent and manage complications. Immunocompromised precautions are taken to reduce the risk of infection, and patients may receive prophylactic medications.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "8. Immunosuppression",
          desc: "Patients who undergo allogeneic transplantation receive immunosuppressive medications to prevent graft-versus-host disease (GVHD), a potential complication where the donor's immune cells attack the recipient's tissues.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "9. Long-term Follow-up",
          desc: "Long-term follow-up is essential to monitor for disease recurrence, late effects of treatment, and potential complications such as GVHD. Patients may require ongoing medical care and support from a multidisciplinary team.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "10. Success Rates",
          desc: "The success of bone marrow transplantation depends on various factors, including the underlying disease, donor-recipient compatibility, and the patient's overall health. Advances in transplantation techniques and supportive care have improved outcomes, with many patients achieving long-term remission or cure.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "11. Complications and Risks",
          desc: "Complications of bone marrow transplantation can include infection, graft failure, graft-versus-host disease (GVHD), organ toxicity, and long-term effects on fertility and quality of life. Close monitoring and prompt intervention are crucial for managing complications.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "12. Cost and Insurance",
          desc: "Bone marrow transplantation can be expensive, including pre-transplant evaluation, transplant procedure, post-transplant care, and long-term follow-up. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team.",
        },
      ],
    },
    {
      link: "heart-transplantation",
      name: "Heart Transplantation",
      desc: "Heart transplantation is a complex surgical procedure where a diseased or damaged heart is replaced with a healthy heart from a donor.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about:
        "This life-saving procedure is typically reserved for patients with end-stage heart failure or severe coronary artery disease who have exhausted other treatment options. Here's a comprehensive overview of heart transplantation:",
      specifications_and_benifits: [
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "1. Patient Evaluation",
          desc: "Patients undergo a thorough evaluation by a transplant team to assess their suitability for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and psychosocial assessment.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "2. Donor Selection",
          desc: "Donors are typically deceased individuals who have consented to organ donation or whose families have consented after their death. Compatibility between donor and recipient is assessed based on blood type, size, and tissue matching to minimize the risk of rejection.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "3. Pre-transplant Preparation",
          desc: "Patients undergo medical optimization to ensure they are in the best possible health for surgery. This may include managing underlying medical conditions, such as hypertension or diabetes.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "4. Matching and Compatibility",
          desc: "Donor-recipient matching is crucial for successful transplantation. Blood type compatibility and human leukocyte antigen (HLA) matching are assessed to reduce the risk of rejection.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "5. Surgical Procedure",
          desc: "Heart transplant surgery involves removing the diseased heart and implanting the donor heart. The new heart is typically placed in the chest cavity and connected to the recipient's blood vessels and remaining heart structures.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "6. Post-operative Care",
          desc: "Patients require intensive care and close monitoring in the immediate post-operative period to prevent complications and ensure proper functioning of the transplanted heart. Immunosuppressive medications are prescribed to prevent rejection of the donor organ.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "7. Immunosuppression",
          desc: "Patients need to take immunosuppressive medications for life to prevent rejection. These medications suppress the immune system to prevent it from attacking the transplanted heart.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "8. Recovery and Rehabilitation",
          desc: "Patients undergo a period of recovery in the hospital followed by ongoing monitoring as an outpatient. Rehabilitation may include physical therapy, cardiac rehabilitation, and lifestyle modifications.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "9. Long-term Follow-up",
          desc: "Long-term follow-up is essential to monitor heart function, manage complications, and adjust medications as needed. Regular visits to the transplant center are scheduled for monitoring and support.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "10. Complications and Risks",
          desc: "Complications can include rejection, infection, cardiac allograft vasculopathy (narrowing of the arteries in the transplanted heart), and side effects of immunosuppressive medications. Close monitoring and prompt intervention are crucial for managing complications.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "11. Success Rates",
          desc: "Heart transplantation has improved significantly over the years, with most patients experiencing improved quality of life and long-term survival. Success rates vary depending on factors such as donor-recipient compatibility, underlying heart disease, and overall health.",
        },
        {
          thumbnail: "/assets/images/servicesimg1.png",
          title: "12. Cost and Insurance",
          desc: "Heart transplantation can be expensive, including pre-transplant evaluation, surgery, post-operative care, and lifelong medication costs. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team.",
        },
      ],
    },
    {
      link: "kidney-transplantation",
      name: "Kidney Transplantation",
      desc: "Kidney transplantation, also known as renal transplantation, is a surgical procedure where a healthy kidney from a donor is transplanted into a patient whose kidneys have failed or are no longer functioning properly.",
      full_screen_img_pc: "/assets/images/MedicineInIndiaimg.png",
      full_screen_img_phone: "/assets/images/MedicineInIndiaimgphone.png",
      about: "This procedure offers a chance for improved quality of life and longevity for patients with end-stage renal disease (ESRD) or severe kidney dysfunction. Here's a comprehensive overview of kidney/renal transplantation:",
      "specifications_and_benifits": [
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "1. Patient Evaluation",
          "desc": "Patients with kidney failure undergo a thorough evaluation by a transplant team to determine if they are suitable candidates for transplantation. Evaluation includes medical history, physical examination, laboratory tests, imaging studies, and psychosocial assessment."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "2. Donor Selection",
          "desc": "Potential donors can be living or deceased. Living donors are often family members or individuals willing to donate a kidney altruistically. Deceased donors are individuals who have consented to organ donation or whose families have consented after their death."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "3. Pre-transplant Preparation",
          "desc": "Patients undergo pre-transplant medical optimization to ensure they are in the best possible health for surgery. This may include managing underlying medical conditions, such as diabetes or hypertension."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "4. Matching and Compatibility",
          "desc": "Donor-recipient compatibility is assessed through blood tests and tissue typing to minimize the risk of rejection. Human leukocyte antigen (HLA) matching is crucial for successful transplantation."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "5. Surgical Procedure",
          "desc": "The transplant surgery involves removing the diseased kidney (if present) and implanting the donor kidney. The new kidney is typically placed in the lower abdomen and connected to the patient's blood vessels and bladder."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "6. Post-operative Care",
          "desc": "Patients require close monitoring in the immediate post-operative period to prevent complications and ensure proper functioning of the transplanted kidney. Immunosuppressive medications are prescribed to prevent rejection of the donor organ."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "7. Immunosuppression",
          "desc": "Patients need to take immunosuppressive medications for life to prevent rejection. These medications suppress the immune system to prevent it from attacking the transplanted kidney."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "8. Recovery and Rehabilitation",
          "desc": "Patients undergo a period of recovery in the hospital followed by ongoing monitoring as an outpatient. Rehabilitation may include dietary modifications, medication management, and lifestyle changes."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "9. Long-term Follow-up",
          "desc": "Long-term follow-up is essential to monitor kidney function, manage complications, and adjust medications as needed. Regular visits to the transplant center are scheduled for monitoring and support."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "10. Complications and Risks",
          "desc": "Complications can include rejection, infection, side effects of immunosuppressive medications, and recurrence of underlying kidney disease. Close monitoring and prompt intervention are crucial for managing complications."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "11. Success Rates",
          "desc": "Kidney transplantation has high success rates, with most patients experiencing improved quality of life and long-term survival. Success rates vary depending on factors such as donor-recipient compatibility, age, and overall health."
        },
        {
          "thumbnail": "/assets/images/servicesimg1.png",
          "title": "12. Cost and Insurance",
          "desc": "Kidney transplantation can be expensive, including pre-transplant evaluation, surgery, post-operative care, and lifelong medication costs. Many insurance plans cover transplantation, but patients should check their coverage and discuss financial concerns with the transplant team."
        }
      ]
    }
    
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
          {selectedSpeciality.about && selectedSpeciality.about.length > 0 && (
            <div className="w-4/5 md:w-11/12 flex flex-col gap-6 py-12">
              <p className="Speciality-title">About</p>
              <p className="Speciality-description">
                {selectedSpeciality.about}
              </p>
            </div>
          )}

          {selectedSpeciality.faq && selectedSpeciality.faq.length > 0 && (
            <div className="w-4/5 md:w-11/12 flex flex-col gap-12 py-12">
              <p className="Speciality-title">
                <span className="text-[#700619] font-semibold">
                  Frequently{" "}
                </span>
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
                      <p className="Speciality-faq-question">{item.question}</p>
                    </AccordionSummary>
                    <AccordionDetails className="Speciality-faq-answer">
                      {item.answer}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          )}

          {selectedSpeciality.specifications_and_benifits &&
            selectedSpeciality.specifications_and_benifits.length > 0 && (
              <div className="flex gap-10 w-4/5 md:w-11/12 py-12 flex-col items-center">
                <p className="Speciality-title">
                  Specifications and
                  <span className="text-[#700619] font-semibold">
                    {" "}
                    Benefits
                  </span>
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
            )}
        </>
      )}
    </div>
  );
}
