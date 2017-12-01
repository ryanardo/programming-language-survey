$(document).ready(function() {
  // Back end logic
  function cSharpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((typeOfBusiness = "bigAndEstablished") && (companyToWorkFor = "microsoft") || (projectTypes = "internalSoftware")) {
      return true;
    } else {
      console.log("Error! C# Language");
    }
  } //End cSharpLanguage function
  function javaLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((projectTypes = "highPerformanceProcessing") || (projectTypes = "userInterface") || (typeOfDevelopment = "backEnd") || (webOrMobileDevelopment = "mobileDevelopment") && (userSoftwareInterest = "android")) {
      return true;
    } else {
      console.log("Error! Java Language");
    }
  }; //End javaLanguage function
  function phpLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((companyToWorkFor = "governmentAgency") || (projectTypes = "serverSide") || (projectTypes = "contentManagementSystems") || (typeOfDevelopment = "notSure") || (webOrMobileDevelopment = "webDevelopment") || (userSoftwareInterest = "drupal") || (userSoftwareInterest = "joomla") || (userSoftwareInterest = "wordpress")) {
      return true;
    } else {
      console.log("Error! PHP Language");
    }
  } //End phpLanguage function
  function rubyLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((typeOfBusiness = "startup") || (companyToWorkFor = "mac") || (companyToWorkFor = "microsoft") || (companyToWorkFor = "governmentAgency") || (projectTypes = "interactiveWebApplications") || (typeOfDevelopment = "frontEnd") || (typeOfDevelopment = "backEnd") || (typeOfDevelopment = "notSure") || (webOrMobileDevelopment = "webDevelopment") || (userSoftwareInterest = "android") || (userSoftwareInterest = "drupal") || (userSoftwareInterest = "joomla") || (userSoftwareInterest = "wordpress")) {
    return true;
      } else {
        console.log("Error! Language");
      }
    } //End rubyLanguage function

  //Front end logic
  $("form#surveyQuestionnaire").submit(function(event) {
    event.preventDefault();
    var typeOfBusiness = $("#typeOfBusiness").val();
    var  projectTypes = $("#projectTypes").val();
    var  typeOfDevelopment = $("#typeOfDevelopment").val();
    var  webOrMobileDevelopment = $("#webOrMobileDevelopment").val();
    var  companyToWorkFor = $("#companyToWorkFor").val();
    var  userSoftwareInterest = $("#userSoftwareInterest").val();

    if (cSharpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
      console.log("cSharpLanguage");
      $("#formOutput").text("C# Programming Language!");
      $("#cSharpLanguage").show();
    } else if (javaLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
      console.log();
      $("#formOutput").text("Java Programming Language!");
      $("#javaLanguage").show();
    } else if (phpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
      console.log();
      $("#formOutput").text("PHP Programming Language!");
      $("#phpLanguage").show();
    } else if (rubyLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
      console.log();
      $("#formOutput").text("Ruby Programming Language!");
      $("#rubyLanguage").show();
    } else {
      console.log("Error! No language available for selected options!");
    }

  }); //End of the 'Form submit' function
}); //End of the 'document ready' function
