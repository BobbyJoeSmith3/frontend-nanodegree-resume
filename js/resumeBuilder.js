/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Bobby Joe Smith III");
 // var awesomeThoughts = "I am Bobby Joe and I am AWESOME!";
 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // console.log(awesomeThoughts);
 // console.log(funThoughts);
 // $("#main").append(funThoughts);

// DATA VARIABLES
var name = "Bobby Joe Smith III";
var role = "Web Developer";

// DATA REPLACEMENTS
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

// Prepend name and role so they go before unordered list
// Order matters
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
