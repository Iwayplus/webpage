import React, { useEffect } from "react";
import { motion } from "framer-motion";

import bala from "../assets/images/sir.png";
import mishor from "../assets/images/mishor.jpeg";
import himanshu from "../assets/images/himanshu.jpeg";
import vikas from "../assets/images/vikas.png";
import rao from "../assets/images/rao.png";
import pulkit from "../assets/images/pulkit.png";
import siva from "../assets/images/siva.png";
import wilson from "../assets/images/Wilson.png";
import tanishka from "../assets/images/tanishka.png";
import vyom from "../assets/images/vyom.png";
import ujjawal from "../assets/images/Ujjawal.png";
import udit from "../assets/images/udit.png";

const teamMembers = [
  { image: bala, name: "M. Balakrishnan", designation: "Mentor, Technical Development" },
  { image: rao, name: "P.V.M. Rao", designation: "Mentor, Business Development" },
  { image: vikas, name: "Vikas Upadhyay", designation: "Founder" },
  { image: pulkit, name: "Pulkit Sapra", designation: "Co-founder" },
  { image: mishor, name: "Mishor Patra", designation: "Software Developer" },
  { image: siva, name: "Sivaprakasham", designation: "UI/UX Designer" },
  { image: himanshu, name: "Himanshu Aggarwal", designation: "Software Developer" },
  { image: wilson, name: "Wilson Daniel", designation: "Software Developer" },
  { image: tanishka, name: "Tanishka", designation: "Sr. Administrator" },
  { image: vyom, name: "Vyom Maheshwari", designation: "Software Developer" },
  { image: ujjawal, name: "Ujjawal Jha", designation: "Software Developer" },
  { image: udit, name: "Udit Soni", designation: "Software Developer" },
];

const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const TeamCard = ({ image, name, designation }) => (
  <motion.div
    variants={cardVariant}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    style={{
      width: "280px",
      height: "369px",
      background: `url(${image}) lightgray 50% / cover no-repeat`,
      position: "relative",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      transition: "transform 0.3s ease",
    }}
  >
    <div
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        padding: "16px 20px",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <h3
        style={{
          color: "#FFF",
          fontFamily: '"Plus Jakarta Sans"',
          fontSize: "20px",
          fontWeight: "600",
          margin: "0 0 6px 0",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          color: "#FFF",
          fontFamily: '"Plus Jakarta Sans"',
          fontSize: "16px",
          fontWeight: "500",
          margin: 0,
        }}
      >
        {designation}
      </p>
    </div>
  </motion.div>
);

const TeamSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariant}
      style={{ padding: "40px 20px", textAlign: "center" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          color: "var(--IwayPlus-RED, #E63F31)",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "36px",
          fontWeight: 600,
          marginTop: "3%",
          lineHeight: "44px",
          letterSpacing: "-0.72px",
          marginBottom: "12px",
        }}
      >
        Meet our team
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          color: "var(--Gray-600, #475467)",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "30px",
          maxWidth: "750px",
          margin: "0 auto 40px auto",
        }}
      >
        Our philosophy is simple — hire a team of diverse, passionate people and
        foster a culture that empowers you to do your best work.
      </motion.p>

      <motion.div
        variants={containerVariant}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            designation={member.designation}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TeamSection;
