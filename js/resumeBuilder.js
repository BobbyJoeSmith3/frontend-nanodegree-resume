/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Bobby Joe Smith III");
 // var awesomeThoughts = "I am Bobby Joe and I am AWESOME!";
 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // console.log(awesomeThoughts);
 // console.log(funThoughts);
 // $("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", "Bobby Joe Smith III");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);
