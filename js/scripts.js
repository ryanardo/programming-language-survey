$(document).ready(function() {
  // Back end logic
  function cSharpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((typeOfBusiness === "bigAndEstablished") && (companyToWorkFor === "microsoft") || (projectTypes === "internalSoftware")) {
      return true;
    } else {
      console.log("Error! C# Language");
    }
  } //End cSharpLanguage function
  function javaLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((projectTypes === "highPerformanceProcessing") || (projectTypes === "userInterface") || (typeOfDevelopment === "backEnd") || (webOrMobileDevelopment === "mobileDevelopment") && (userSoftwareInterest === "android")) {
      return true;
    } else {
      console.log("Error! Java Language");
    }
  }; //End javaLanguage function
  function phpLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((companyToWorkFor === "governmentAgency") || (projectTypes === "serverSide") || (projectTypes === "contentManagementSystems") || (typeOfDevelopment === "notSure") || (webOrMobileDevelopment === "webDevelopment") || (userSoftwareInterest === "drupal") || (userSoftwareInterest === "joomla") || (userSoftwareInterest === "wordpress")) {
      return true;
    } else {
      console.log("Error! PHP Language");
    }
  } //End phpLanguage function
  function rubyLanguage (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((typeOfBusiness === "startup") || (companyToWorkFor === "mac") || (companyToWorkFor === "microsoft") || (companyToWorkFor === "governmentAgency") || (projectTypes === "interactiveWebApplications") || (typeOfDevelopment === "frontEnd") || (typeOfDevelopment === "backEnd") || (typeOfDevelopment === "notSure") || (webOrMobileDevelopment === "webDevelopment") || (userSoftwareInterest === "android") || (userSoftwareInterest === "drupal") || (userSoftwareInterest === "joomla") || (userSoftwareInterest === "wordpress")) {
    return true;
      } else {
        console.log("Error! Language");
      }
    } //End rubyLanguage function
  function resetForms() {
    document.forms['myFormName'].reset();
  }

  //Front end logic
  $("form#surveyQuestionnaire").submit(function(event) {
    event.preventDefault();
    var typeOfBusiness = $("#typeOfBusiness").val();
    var  projectTypes = $("#projectTypes").val();
    var  typeOfDevelopment = $("#typeOfDevelopment").val();
    var  webOrMobileDevelopment = $("#webOrMobileDevelopment").val();
    var  companyToWorkFor = $("#companyToWorkFor").val();
    var  userSoftwareInterest = $("#userSoftwareInterest").val();

    // debugger;
    if (cSharpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
      $("#cSharpLanguage").show();
    } else {
      console.log("C# Programming Language Not Displayed");
    }
    //End of C#
    // debugger;
    if (javaLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        $("#javaLanguage").show();
        } else {
          console.log("Java Programming Language Not Displayed");
        }
    //End Java
    // debugger;
    if (phpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        $("#phpLanguage").show();
      } else {
        console.log("PHP Programming Language Not Displayed");
    }
    //End PHP
    // debugger;
    if (rubyLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        $("#rubyLanguage").show();
      } else {
        console.log("Ruby Programming Language Not Displayed");
    }
    //End Ruby

  //End of the 'Form submit' function
  });
//End of the 'document ready' function
});
