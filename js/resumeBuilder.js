/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Bobby Joe Smith III");
 // var awesomeThoughts = "I am Bobby Joe and I am AWESOME!";
 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // console.log(awesomeThoughts);
 // console.log(funThoughts);
 // $("#main").append(funThoughts);

// // DATA VARIABLES
var name = "Bobby Joe Smith III";
var role = "Web Developer";
var contact = "323 NorthDakota Ln,\rNorth Dakota City, ND NDZIP"
var website = "www.bobbyjoesmith.com";
var picURL = "https://cdnb.artstation.com/p/assets/images/images/001/863/575/large/irakli-nadar-artstation-da.jpg?1453903033";
var welcomeMessage = "Welcome to Bobby Joe 3.0's resumé. Inside you will find all kinds of information about Bobby Joe's professional exploits. Hopefully, you'll find something that interests you. Take a look!";
var skills = ["graphic design", "photography", "arduino", "computer programming", "web development"];

// biography object
var bio = {
  "name" : name,
  "role" : role,
  "website" : website,
  "contact" : contact,
  "picURL" : picURL,
  "welcomeMessage" : welcomeMessage,
  "skills" : skills
}

// DATA REPLACEMENTS
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.website).replace("%contact%", "website: ");
var formattedProfilePic = HTMLbioPic.replace("%data%", bio.picURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

// Prepend name and role so they go before unordered list
// Order matters
$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedProfilePic);
$("#header").prepend(formattedContact);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// // 08 07 2017 21:29:44.276:
// //  with unlimited concurrency
// //  08 07 2017 21:29:44.520:
