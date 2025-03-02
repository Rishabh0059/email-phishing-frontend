/* eslint-disable no-unused-vars */
import React from "react"
import Card from "./Card";
import CardContent from "./CardContent";
import Button from "./Button";
import { AlertTriangle, ShieldCheck, MailWarning } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const hackingTopics = [
  {
    title: "Phishing Emails",
    description:
      "Phishing emails trick users into revealing personal information by pretending to be trustworthy entities.",
    icon: <MailWarning size={40} className="text-red-500" />,
  },
  {
    title: "Social Engineering",
    description:
      "Attackers manipulate people into giving up confidential information by exploiting trust.",
    icon: <AlertTriangle size={40} className="text-yellow-500" />,
  },
  {
    title: "Malicious Attachments",
    description:
      "Emails often carry harmful attachments that execute malware when opened.",
    icon: <ShieldCheck size={40} className="text-blue-500" />,
  },
];

const phishingStats = [
  { year: 2021, cases: "1.5 million", losses: "$4.5 billion" },
  { year: 2022, cases: "2.3 million", losses: "$6.1 billion" },
  { year: 2023, cases: "3.1 million", losses: "$8.2 billion" },
  { year: 2024, cases: "3.9 million", losses: "$10 billion" },
];
const Home=()=>{
return (
  <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-red-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        This was a Phishing Mail 
        Stay Aware: Protect Yourself from Phishing Mails
      </motion.h1>

      {/* Hacking Topics Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {hackingTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md">
              <CardContent className="flex flex-col items-center text-center">
                {topic.icon}
                <h2 className="text-xl font-semibold mt-4">{topic.title}</h2>
                <p className="mt-2 text-gray-400">{topic.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Learn More Button */}
      <Button className="mt-8 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg">
        Learn More
      </Button>

      {/* Chrome Extension Links Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Chrome Extensions for Spam Detection
        </h2>
        <div className="flex gap-4">
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => window.open("https://chrome.google.com/webstore/detail/phishtector", "_blank")}
          >
            PhishTector
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => window.open("https://chrome.google.com/webstore/detail/spam-detect", "_blank")}
          >
            Spam Detect
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={() => window.open("https://chrome.google.com/webstore/detail/email-guardian", "_blank")}
          >
            Email Guardian
          </Button>
        </div>
      </div>

      {/* Email Phishing Cases Carousel */}
      <div className="mt-12 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-400 text-center mb-4">
          Annual Phishing Statistics
        </h2>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
        >
          {phishingStats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 text-white rounded-lg text-center shadow-md"
            >
              <h3 className="text-3xl font-bold">{stat.year}</h3>
              <p className="mt-2 text-xl">Cases: {stat.cases}</p>
              <p className="mt-1 text-xl">Losses: {stat.losses}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
)
}

export default Home;