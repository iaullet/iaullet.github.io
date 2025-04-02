const form = document.getElementById('form');
$('#course-option').hide();
$('#add').hide();

    let courses = [];
    let courseCounter = 1;

    function deleteCourse(courseId) {
        
        courses = courses.filter((course) => course.id !== courseId);
        
        const courseElement = document.getElementById(courseId);
        if (courseElement) {
            courseElement.remove();
        }

        if (courses.length === 0){
            $('#add').show();
        }

    }

    function addCourse() {

        if (courses.length > 0) {
            $('#add').hide();
        }
        const courseList = document.getElementById('course-list');
        const courseTemplate = document.getElementById('course-option');
        
        const newCourseItem = courseTemplate.cloneNode(true);
        newCourseItem.style.display = 'block'; 
        newCourseItem.classList.add(`course-option${courseCounter}`);
        newCourseItem.id = `course${courseCounter}`;
        
        const courseCode = newCourseItem.querySelector('#course-code');
        const courseTitle = newCourseItem.querySelector('#course-title');
        const courseWhy = newCourseItem.querySelector('#course-why');

        const deleteButton = newCourseItem.querySelector('#remove') || document.createElement('button');
        deleteButton.textContent = 'Delete Course';
        deleteButton.onclick = function() {
            deleteCourse(newCourseItem.id); 
        };
        newCourseItem.appendChild(deleteButton);

        courses.push({
            id: newCourseItem.id,
            code: courseCode.value,
            title: courseTitle.value,
            why: courseWhy.value
        });
        courseCode.value = "";
        courseTitle.value = "";
        courseWhy.value = "";

        courseList.appendChild(newCourseItem);
        courseCounter++;

    }

if (form) {

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const mascotInput = document.getElementById('mascot').value;
        const introImage = document.getElementById('introimage').files[0];
        const imageUrl = URL.createObjectURL(introImage);
        const captionInput = document.getElementById('imagecaption').value;
        const personalInput = document.getElementById('personal-bg').value;
        const academicInput = document.getElementById('academic-bg').value;
        const softwareInput = document.getElementById('software-bg').value;
        const platformInput = document.getElementById('platform').value;
        const funnyInput = document.getElementById('funny').value;
        const extraInput = document.getElementById('extra').value;
        const verifyInput = document.getElementById('verification').checked;
        const pageIntro = document.getElementById('intro');
    
        const fieldVerify = () => {

            let missingFields = [];
            
            const requiredFields = document.querySelectorAll('input[required], textarea[required]');
            
            requiredFields.forEach(function(field) {
                if (!field.value.trim() && !(field.type === "checkbox" && !field.checked)) {
                    missingFields.push(field.previousElementSibling.textContent.trim()); 
                }
            });
        
            if (missingFields.length > 0) {
                alert('Please fill in the following required fields: \n' + missingFields.join('\n'));
            }
        };

        const displayText = () => {

            pageIntro.innerHTML = '';
        
            pageIntro.innerHTML += `
                <div id="intro">
                <h3 id="name-mascot" class="center">${firstName} ${lastName} || ${mascotInput}</h3>
                `;
                pageIntro.innerHTML += `
                <figure>
                <div id="load-image"></div>
                <img src="${imageUrl}" alt="Intro Photo">
                <figcaption id="image-caption">${captionInput}</figcaption>
                </figure>
                `;
            pageIntro.innerHTML += `
                <ul>
                <li><b>Personal Background:</b><span id="personal-back">${personalInput}</span></li>
                <li><b>Academic Background:</b> <span id="academic-back">${academicInput}</span></li>
                <li><b>Programming/Software Background:</b><span id="software-back">${softwareInput}</span></li>
                <li><b>Primary Computer Platform:</b><span id="platform-choice">${platformInput}</span></li>
                `;
            if (courses.length > 0){
                pageIntro.innerHTML += `
                <li><b>Courses I'm Taking and Why:</b></li>
                    <ul>
                `;
                courses.forEach((course) => {
                    const courseHTML = `
                        <li><b>${course.code}${course.title}: </b>${course.why}</li>
                        `;
                    pageIntro.innerHTML += courseHTML;
                });
                pageIntro.innerHTML += '</ul>';
            }
            if (funnyInput) {
                pageIntro.innerHTML += `<li><b>Funny Fact:</b><span id="funny-fact">${funnyInput}</span></li>
                `;
            }
            if (extraInput) {
                pageIntro.innerHTML += `<li><b>Extra Information:</b><span id="extra-info">${extraInput}</span></li>
                `;
            }
            pageIntro.innerHTML += '</ul><input type="reset" value="Reset" class="inline"></div>';
        };
    fieldVerify();
    $('.form-area').hide();
    displayText();

    });
}

reset.onclick = function() {
    $('.form-area').show();
    document.getElementById('intro').innerHTML = `<div id="intro">
    </div>`;
};
