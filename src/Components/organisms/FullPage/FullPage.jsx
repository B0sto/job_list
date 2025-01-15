import React from "react";
import Card from "@/Components/moleculs/Card/Card";

const FullPage = () => {
  const data = [
    {
      logo: "/photosnap.svg",
      company: "Photosnap",
      isNew: true,
      isFeatured: true,
      job: "Senior Frontend Developer",
      post: "1d ago",
      jobType: "Full Time",
      location: "USA only",
      tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    },
    {
      logo: "/manage.svg",
      company: "Manage",
      isNew: true,
      isFeatured: true,
      job: "Fullstack Developer",
      post: "1d ago",
      jobType: "Part Time",
      location: "Remote",
      tags: ["Fullstack", "Midweight", "Python", "React"],
    },
    {
      logo: "/account.svg",
      company: "Account",
      isNew: false,
      isFeatured: false,
      job: "Junior Frontend Developer",
      post: "2d ago",
      jobType: "Part Time",
      location: "USA only",
      tags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    },
    {
      logo: "/myhome.svg",
      company: "MyHome",
      isNew: false,
      isFeatured: false,
      job: "Junior Frontend Developer",
      post: "5d ago",
      jobType: "Contract",
      location: "USA only",
      tags: ["Frontend", "Junior", "CSS", "JavaScript"],
    },
    {
      logo: "/loop.svg",
      company: "Loop Studios",
      isNew: false,
      isFeatured: false,
      job: "Software Engineer",
      post: "1w ago",
      jobType: "Full Time",
      location: "Worldwide",
      tags: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
    },
    {
      logo: "/faceit.svg",
      company: "FaceIt",
      isNew: false,
      isFeatured: false,
      job: "Junior Backend Developer",
      post: "2w ago",
      jobType: "Full Time",
      location: "UK only",
      tags: ["Backend", "Junior", "Ruby", "RoR"],
    },
    {
      logo: "/shortly.svg",
      company: "Shortly",
      isNew: false,
      isFeatured: false,
      job: "Junior Developer",
      post: "2w ago",
      jobType: "Full Time",
      location: "Worldwide",
      tags: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
    },
    {
      logo: "/insure.svg",
      company: "Insure",
      isNew: false,
      isFeatured: false,
      job: "Junior Frontend Developer",
      post: "2w ago",
      jobType: "Full Time",
      location: "USA only",
      tags: ["Frontend", "Junior", "Vue", "Sass", "JavaScript"],
    },
    {
      logo: "/eyecam.svg",
      company: "Eyecam Co.",
      isNew: false,
      isFeatured: false,
      job: "Senior Frontend Developer",
      post: "3w ago",
      jobType: "Full Time",
      location: "Worldwide",
      tags: ["Fullstack", "Midweight", "JavaScript", "Django", "Python"],
    },
    {
      logo: "/air.svg",
      company: "The Air Filter Company",
      isNew: false,
      isFeatured: false,
      job: "Front-end Dev",
      post: "1mo ago",
      jobType: "Part Time",
      location: "Worldwide",
      tags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      <div className="grid gap-6">
        {data?.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FullPage;
