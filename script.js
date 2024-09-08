var _a;
// listing element 
(_a = document.getElementById("resumeFrom")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var exprienceElement = document.getElementById("exprience");
    var skillsElement = document.getElementById("skills");
    // check the all element  are present
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && exprienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var exprience = exprienceElement.value;
        var skills = skillsElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //create resume output
        var resumeOutput = "\n        <h2> Resume </h2>\n        ".concat(profilePictureURL, " ? '<img src=\"").concat(profilePictureURL, "\" alt=\"profile Picture\" class=\"profilePicture\">' : \"\";\n        <p><strong>Name:</strong> ").concat(name_1, "</p>\n        <p><strong>email:</strong> ").concat(email, "</p>\n        <p><strong>phone:</strong> ").concat(phone, "</p>\n\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Exprience</h3>\n        <p>").concat(exprience, "</p>\n\n        <h3>Skulls</h3>\n        <p>").concat(skills, "</p>\n       ");
        var resumeOutputEliment = document.getElementById('resumeOutput');
        if (resumeOutputEliment) {
            resumeOutputEliment.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('one or more output element are missnig');
    }
});
