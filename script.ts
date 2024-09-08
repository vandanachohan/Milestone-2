// listing element 
document.getElementById(`resumeFrom`)?.addEventListener(`submit`, function(event){
    event.preventDefault();


    // type assertion
     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
     const nameElement = document.getElementById(`name`) as HTMLInputElement;
     const emailElement = document.getElementById(`email`) as HTMLInputElement;
     const phoneElement = document.getElementById(`phone`) as HTMLInputElement;
     const educationElement = document.getElementById(`education`) as HTMLInputElement;
     const exprienceElement = document.getElementById(`exprience`) as HTMLInputElement;
     const skillsElement = document.getElementById(`skills`) as HTMLInputElement;

     // check the all element  are present
     if (profilePictureInput && nameElement  && emailElement && phoneElement && educationElement && exprienceElement && skillsElement){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const exprience = exprienceElement.value;
        const skills = skillsElement.value;

   // picture elements
       const profilePictureFile = profilePictureInput.files?.[0]
       const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): "";


        //create resume output
        const resumeOutput =`
        <h2> Resume </h2>
        ${profilePictureURL} ? '<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">' : "";
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>email:</strong> ${email}</p>
        <p><strong>phone:</strong> ${phone}</p>


        <h3>Education</h3>
        <p>${education}</p>

        <h3>Exprience</h3>
        <p>${exprience}</p>

        <h3>Skulls</h3>
        <p>${skills}</p>
       `;

        const resumeOutputEliment = document.getElementById('resumeOutput')
         if (resumeOutputEliment){
            resumeOutputEliment.innerHTML = resumeOutput 
         } else {
            console.error('the resume output element are missing')
         } 
         
         }else{
            console.error('one or more output element are missnig')
         }
         
      })


      