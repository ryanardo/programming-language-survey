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
  function placeHolder (typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
    if ((typeOfBusiness = "placeHolder") || (companyToWorkFor = "placeHolder") || (projectTypes = "placeHolder") || (typeOfDevelopment = "placeHolder") || (webOrMobileDevelopment = "placeHolder") || (userSoftwareInterest = "placeHolder")) {
      return true;
    } else {
      console.log("Error! Placeholder is true");
    }
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

    function cSharpLanguageOutput(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
      if (cSharpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        $("#formOutput").text("C# Programming Language!");
      } else {
        console.log("C# programming language not selected.");
      }
    };
    //End C#
    function javaLanguageOutput(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
      if (javaLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        $("#formOutput").text(" Programming Language!")
      } else {
        console.log(" programming language not selected");
      }
    }
    //End Java
    function rubyLanguageOutput(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
      if (rubyLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        $("#formOutput").text(" Programming Language!")
      } else {
        console.log("Ruby programming language not selected");
      }
    }
    //End Ruby
    function phpLanguageOutput(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest) {
      if (phpLanguage(typeOfBusiness, companyToWorkFor, projectTypes, typeOfDevelopment, webOrMobileDevelopment, userSoftwareInterest)) {
        $("#formOutput").text("PHP Programming Language!")
      } else {
        console.log("PHP programming language not selected");
      }
    }
    //End PHP

  //End of the 'Form submit' function
  });
//End of the 'document ready' function
});
