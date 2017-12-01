$(document).ready(function() {
  // Back end logic
  function cSharpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((typeOfBusiness = "bigAndEstablished") && (companyToWorkFor = "microsoft") || (projectTypes = "internalSoftware")) {
      return true;
    } else {
      console.log("Error! C# Language");
    }
  function javaLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if (
      (typeOfBusiness = "enterprise") && (companyToWorkFor = "mac") || (companyToWorkFor = "microsoft") && (projectTypes = "highPerformanceProcessing") || (projectTypes = "userInterface") || (typeOfDevelopment = "backEnd") || (webOrMobileDevelopment = "mobileDevelopment") && (userSoftwareInterest = "android") {
      return true;
    } else {
      console.log("Error! Java Language");
    }
  };
  function phpLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((companyToWorkFor = "governmentAgency") || (projectTypes = "serverSide") || (projectTypes = "contentManagementSystems") || (typeOfDevelopment = "notSure") || (webOrMobileDevelopment = "webDevelopment") || (userSoftwareInterest = "drupal") || (userSoftwareInterest = "joomla") || (userSoftwareInterest = "wordpress")) {
      return true;
    } else {
      console.log("Error! PHP Language");
    }
  }
  function rubyLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((typeOfBusiness = "startup") || (companyToWorkFor = "mac") || (companyToWorkFor = "microsoft") || (companyToWorkFor = "governmentAgency") || (projectTypes = "interactiveWebApplications") || (typeOfDevelopment = "frontEnd") || (typeOfDevelopment = "backEnd") || (typeOfDevelopment = "notSure") || (webOrMobileDevelopment = "webDevelopment") || (userSoftwareInterest = "android") || (userSoftwareInterest = "drupal") || (userSoftwareInterest = "joomla") || (userSoftwareInterest = "wordpress")) {
    return true;
      } else {
        console.log("Error! Language");
      }
    }

  // Front end logic
  $("form#surveyQuestionnaire").submit(function(event) {
      var typeOfBusiness = $("#typeOfBusiness").val();
      var  projectTypes = $("#projectTypes").val();
      var  typeOfDevelopment = $("#typeOfDevelopment").val();
      var  webOrMobileDevelopment = $("#webOrMobileDevelopment").val();
      var  companyToWorkFor = $("#companyToWorkFor").val();
      var  userSoftwareInterest = $("#userSoftwareInterest").val();

      if (cSharpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        console.log("cSharpLanguage");
        $("#formOutput").text("C# Programming Language!");
      }

    });
}); //End of '$(document).ready(function())'
