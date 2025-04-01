const form = document.getElementById('form-area')
$('.course-option').hide();

    let courses = [];
    let courseCounter = 0;

    function addCourse() {

        const courseList = document.getElementById('course-list');
        const courseTemplate = document.getElementById('course-option');

        const newCourseItem = courseTemplate.cloneNode(true);
        newCourseItem.style.display = 'block'; 
        newCourseItem.id = `course${courseCounter}`

        const courseCode = newCourseItem.querySelector('#course-code');
        const courseTitle = newCourseItem.querySelector('#course-title');
        const courseWhy = newCourseItem.querySelector('#course-why');

        courses.push({
            id: newCourseItem.id,
            code: courseCode.value,
            title: courseTitle.value,
            why: courseWhy.value
        });

        courseList.appendChild(newCourseItem);
        courseCounter++;
    };

    function deleteCourse(){
        const courseItem = document.getElementById('remove').closest('.course-option').id;

        courses = courses.filter(course => course.id !== courseItem);
        const courseElement = document.getElementById(courseItem);
            if (courseElement) {
                courseElement.remove(); 
            }
    }
    


form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nameInput = document.getElementById('full-name').value;
    const mascotInput = document.getElementById('mascot').value;
    const captionInput = document.getElementById('imagecaption').value;
    const personalInput = document.getElementById('personal-bg').value;
    const academicInput = document.getElementById('academic-bg').value;
    const softwareInput = document.getElementById('software-bg').value;
    const platformInput = document.getElementById('platform').value;
    const funnyInput = document.getElementById('funny').value;
    const extraInput = document.getElementById('extra').value;
    const verifyInput = document.getElementById('verification').checked;
    const pageIntro = document.getElementById('intro');
    
    const fieldVerify = () =>{
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

    const displayText = () =>{
        pageIntro.innerHTML = '';

        const introContent = document.createElement('div');
        introContent.id = 'intro';

        const nameAndMascot = document.createElement('h3');
        nameAndMascot.innerText = `${nameInput} || ${mascotInput}`;
        introContent.appendChild(nameAndMascot);

        const figure = document.createElement('figure');
        const imageCaption = document.createElement('figcaption');
        imageCaption.innerText = captionInput;
        figure.appendChild(imageCaption);
        introContent.appendChild(figure);

        const ul = document.createElement('ul');

        ul.innerHTML = `
            <li><b>Personal Background:</b><span id="personal-back">${personalInput}</span></li>
            <li><b>Academic Background:</b> <span id="academic-back">${academicInput}</span></li>
            <li><b>Programming/Software Background:</b><span id="software-back">${softwareInput}</span></li>
            <li><b>Primary Computer Platform:</b><span id="platform-choice">${platformInput}</span></li>
        `;

        // Add courses if they exist
        if (courses.length > 0) {
            const courseListItem = document.createElement('li');
            courseListItem.innerHTML = `<b>Courses I'm Taking and Why:</b>`;
            const courseListUl = document.createElement('ul');
            courses.forEach(course => {
                const courseItem = document.createElement('li');
                courseItem.innerHTML = `<b>${course.code} - ${course.title}: </b>${course.why}`;
                courseListUl.appendChild(courseItem);
            });
            courseListItem.appendChild(courseListUl);
            ul.appendChild(courseListItem);
        }

        // Add Funny Fact if provided
        if (funnyInput) {
            const funnyItem = document.createElement('li');
            funnyItem.innerHTML = `<b>Funny Fact:</b><span id="funny-fact">${funnyInput}</span>`;
            ul.appendChild(funnyItem);
        }

        // Add Extra Information if provided
        if (extraInput) {
            const extraItem = document.createElement('li');
            extraItem.innerHTML = `<b>Extra Information:</b><span id="extra-info">${extraInput}</span>`;
            ul.appendChild(extraItem);
        }

        introContent.appendChild(ul);

        pageIntro.appendChild(introContent);  // Append the new content to #intro
    };

    // Display the text after validation
    displayText();

        /*
            pageIntro.innerHTML += `
                <div id="intro">
                <h3 id="name-mascot">${nameInput} || ${mascotInput}</h3>
                `;
            pageIntro.innerHTML += `
                <figure>
                    <div id="load-image"></div>
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

                courses.forEach(course => {
                    const courseHTML = `
                        <li><b>${course.code}${course.title}: </b>${course.why}</li>
                        `;
                    pageIntro.innerHTML += courseHTML;
                });

                pageIntro.innerHTML += '</ul>';
            }; 
            if (funnyInput) {
                pageIntro.innerHTML += `<li><b>Funny Fact:</b><span id="funny-fact">${funnyInput}</span></li>
                `;
            };
            if (extraInput) {
                pageIntro.innerHTML += `<li><b>Extra Information:</b><span id="extra-info">${extraInput}</span></li>
                `;
            };
            pageIntro.innerHTML += '</ul>';
    };
    fieldVerify();
    displayText();
    */
});

