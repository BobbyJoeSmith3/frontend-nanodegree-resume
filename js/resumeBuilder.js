/*
This is empty on purpose! Your code to build the resume will go here.
*/

// BIO
var bio = {
  name: "Bobby Joe Smith III",
  role: "Web Developer",
  contacts: {
    mobile: "666-666-6666",
    email: "bobbyjoe@udacity.com",
    github: "github.com/BobbyJoeSmith3",
    website: "bobbyjoesmith.com",
    location: "North Dakota"
  },
  welcomeMessage: "Welcome to Bobby Joe 3.0's resumé. Inside you will find all kinds of information about Bobby Joe's professional exploits. Hopefully, you'll find something that interests you. Take a look!",
  skills: ["graphic design", "photography", "videography", "computer programming", "web development"],
  biopic: "images/fry.jpg",
  display: function() {
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
    // Append data
    $("#header").prepend(formattedWelcomeMessage);
    $("#header").prepend(formattedProfilePic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").prepend(formattedGithub);
    $("#topContacts").prepend(formattedWebsite);
    $("#topContacts").prepend(formattedMobile);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedLocation);
    // Append skills if available
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(element) {
        var formattedSkill = HTMLskills.replace("%data%", element);
        $("#skills").append(formattedSkill);
      });
    }
  }
};

// WORK
var work = {
  jobs: [
    {
      employer: "Colle+McVoy",
      title: "Web Development Intern",
      location: "Minneapolis, MN",
      dates: "Jan 2016 - Aug 2016",
      description: "Busey ipsum dolor sit amet. Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.You ever roasted doughnuts?Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick."
    },
    {
      employer: "space150",
      title: "Web Development Intern",
      location: "Minneapolis, MN",
      dates: "May 2015 - Sept 2015",
      description: "Busey ipsum dolor sit amet. Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.You ever roasted doughnuts?Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick."
    },
    {
      employer: "NGPVAN",
      title: "Software Engineer Intern",
      location: "Washington, DC",
      dates: "May 2014 - Sept 2014",
      description: "Busey ipsum dolor sit amet. Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.You ever roasted doughnuts?Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick."
    }
  ],
  // TODO: DISPLAY FUNCTION
  display: function() {
    work.jobs.forEach(function(element, index, array) {
      // Create Node
      $("#workExperience").append(HTMLworkStart);
      // Populate data
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
      // Append Node
      $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    });
  }
};

// PROJECTS
var projects = {
  projects: [
    {
      title: "Aglaura",
      dates: "Dec 2016 - Jan 2017",
      description: "You ever roasted doughnuts? These kind of things only happen for the first time once.Did you feel that? Look at me - I'm not out of breath anymore!When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.",
      images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },
    {
      title: "Ohunkakan",
      dates: "Jan 2017 - May 2017",
      description: "The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart. Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick.",
      images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },
    {
      title: "Red Emmas",
      dates: "Feb 2017 - Mar 2017",
      description: "The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart. Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick.",
      images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },
  ]
  // TODO: DISPLAY FUNCTION
}

// EDUCATION
var education = {
  schools: [
    {
      name: "Rhode Island School of Design",
      location: "Providence",
      degree: "MFA",
      majors: ["Graphic Design"],
      url: "www.risd.edu",
      dates: "2017-Present"
    },
    {
      name: "Maryland Institute College of Art",
      location: "Baltimore",
      degree: "Post-Baccalaureate Certificate",
      majors: ["Graphic Design"],
      url: "www.mica.edu",
      dates: "2016-2017"
    },
    {
      name: "Middlebury College",
      location: "Middlebury",
      degree: "BA",
      majors: ["Philosophy", "Political Science"],
      url: "www.middlebury.edu",
      dates: "2005-2010"
    }
  ]
  // TODO: ONLINE COURSES [ title: string, school: string, dates: string, url: string]
  // TODO: DISPLAY FUNCTION
};

// Collect page clicks
// NOTE: function shell exists in helper.js as well, line 89
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

/*
1) Append internationalizeButton to the main div
2) Create a function called inName() that takes in a string of two names and returns an internationalized version that looks like so: Cameron PITTMAN
*/
$("#main").append(internationalizeButton);
function inName(name) {
  // trim to remove any white space
  var nameArray = name.trim().split(" ");
  var formattedLastName = nameArray.pop().toUpperCase();
  // use for each in case person has more than two names entered
  nameArray.forEach(function(item) {
    item.toLowerCase();
    item = item.charAt(0).toUpperCase() + item.slice(1);
  })
  var formattedFirstName = nameArray.join(" ");
  var formattedIntName = formattedFirstName + " " + formattedLastName;
  return formattedIntName;
}

// Encapsulate display function inside projects object
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
    // var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images.forEach(function(item)) {
    //   return item;
    // });
    // $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
  }
}

// CALL DISPLAY METHODS
bio.display();
work.display();
projects.display();

// Add google map of work locations
$("#mapDiv").append(googleMap);
