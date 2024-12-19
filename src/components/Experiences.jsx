import React from "react";

const experiences = [
  {
    title: "Youth Committee",
    description: "Vice-President, manage volunteers and members to organize events with over 200+ people",
    skills: "Skills: Leadership, Collaboration, Decision-making"
  },
  {
    title: "Inverse Paradox",
    description: "Part of mechanical team, uses the lathe and mill to make parts for a 120lb robot",
    skills: "Skills: Problem-solving, machinery skills, teamwork "
  },
  {
    title: "FBLC",
    description: "Trainer, teach and guide students about economic terms",
    skills: "Skills: Teaching, Organization, time management"
  },
  {
    title: "Certified Public Accountant",
    description: "High school ambassador, promote financial literacy to youths",
    skills: "Skills: Public-speaking, Marketing, Finance/numeracy"
  },
  {
    title: "Charms For Change TO - JA Company",
    description: "Vice-President of Production, founded a business with over $500 in sales ",
    skills: "Skills: Leadership, Product-management, analytical skills"
  },
  {
    title: "Black Congress Of Women(CBWC)",
    description: "Tutor, offer one-on-one, online tutorial support to students from Grade 1 to Grade 4",
    skills: "Skills: Teaching, Communication, Adaptivity"
  },
];

const Experience = () => {
  return (
    <div className="text-white py-20" id="experiences">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {experience.title}
              </h3>
              <div className="flex-grow">
                <p className="mt-2 text-gray-300 h-20">{experience.description}</p>
              </div>
              <p className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                {experience.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
