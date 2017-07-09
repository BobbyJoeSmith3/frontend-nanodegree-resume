/*
This is empty on purpose! Your code to build the resume will go here.
*/

// BIO
var bio = {
  "name": "Bobby Joe Smith III",
  "role": "Web Developer",
  "contacts": {
    "mobile": "666-666-6666",
    "email": "bobbyjoe@udacity.com",
    "github": "github.com/BobbyJoeSmith3",
    "website": "bobbyjoesmith.com",
    "location": "North Dakota"
  },
  "biopic": "https://cdnb.artstation.com/p/assets/images/images/001/863/575/large/irakli-nadar-artstation-da.jpg?1453903033",
  "welcomeMessage": "Welcome to Bobby Joe 3.0's resumé. Inside you will find all kinds of information about Bobby Joe's professional exploits. Hopefully, you'll find something that interests you. Take a look!",
  "skills": ["graphic design", "photography", "arduino", "computer programming", "web development"]
};

// WORK
var work = {
  "jobs": [
    {
      "employer": "Colle+McVoy",
      "title": "Web Development Intern",
      "location": "Minneapolis, MN",
      "dates": "Jan 2016 - Aug 2016",
      "description": "Busey ipsum dolor sit amet. Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.You ever roasted doughnuts?Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick."
    },
    {
      "employer": "space150",
      "title": "Web Development Intern",
      "location": "Minneapolis, MN",
      "dates": "May 2015 - Sept 2015",
      "description": "Busey ipsum dolor sit amet. Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.You ever roasted doughnuts?Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick."
    },
    {
      "employer": "NGPVAN",
      "title": "Software Engineer Intern",
      "location": "Washington, DC",
      "dates": "May 2014 - Sept 2014",
      "description": "Busey ipsum dolor sit amet. Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.You ever roasted doughnuts?Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick."
    }
  ]
}

// PROJECTS
var projects = {
  "projects" : [
    {
      "title": "Aglaura",
      "dates": "Dec 2016 - Jan 2017",
      "description": "You ever roasted doughnuts? These kind of things only happen for the first time once.Did you feel that? Look at me - I'm not out of breath anymore!When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.",
      "images": []
    },
    {
      "title": "Ohunkakan",
      "dates": "Jan 2017 - May 2017",
      "description": "The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart. Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick.",
      "images": []
    },
    {
      "title": "Red Emmas",
      "dates": "Feb 2017 - Mar 2017",
      "description": "The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart. Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick.",
      "images": []
    },
  ]
}

// EDUCATION
var education = {
  "schools": [
    {
      "name": "Rhode Island School of Design",
      "location": "Providence",
      "degree": "MFA",
      "majors": ["Graphic Design"],
      "url": "www.risd.edu",
      "years": "2017-Present"
    },
    {
      "name": "Maryland Institute College of Art",
      "location": "Baltimore",
      "degree": "Post-Baccalaureate Certificate",
      "majors": ["Graphic Design"],
      "url": "www.mica.edu",
      "years": "2016-2017"
    },
    {
      "name": "Middlebury College",
      "location": "Middlebury",
      "degree": "BA",
      "majors": ["Philosophy", "Political Science"],
      "url": "www.middlebury.edu",
      "years": "2005-2010"
    }
  ]
};

// DATA REPLACEMENTS
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedProfilePic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

// Prepend name and role so they go before unordered list
// Order matters
$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedProfilePic);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedWebsite);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// // 08 07 2017 21:29:44.276:
// //  with unlimited concurrency
// //  08 07 2017 21:29:44.520:
