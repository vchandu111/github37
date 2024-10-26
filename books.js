let courseData;
async function fetchCourses() {
  const response = await fetch(
    `https://mock-apis-144c0-default-rtdb.firebaseio.com/courses.json`
  );

  let courses = await response.json();
  courseData = Object.entries(courses);
  courses = Object.entries(courses);
  displayCourses(courses);
}

fetchCourses();
function displayCourses(data) {
  document.querySelector("#container").innerHTML = ``;
  data.map(function (el) {
    let [id, course] = el;
    let {
      bestseller,
      instructor,
      lectures,
      title,
      price,
      level,
      rating,
      reviews,
      total_hours: hrs,
    } = course;

    document.querySelector("#container").innerHTML += `
    <div>
        <div>
            <h1>${title}</h1>
            <h3>${instructor}</h3>
            <p>${lectures}</p>
            <p>${level}</p>
            <p>${price}</p>
            <p>${rating}</p>
            <p>${reviews}</p>
            <p>${hrs}</p>
        </div>
        <i class="fa-solid fa-trash-can" onclick="deleteCourse(${el[0]})"></i>
        </div>
      `;
  });
}

function deleteCourse(id) {
  console.log(id, "id");
  if (!confirm("Are you sure you want to delete this course?")) return;
  try {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    fetch(
      "https://mock-apis-144c0-default-rtdb.firebaseio.com/courses/-OA6fTPBVR86R91F193B.json",
      requestOptions
    );
    alert("Course deleted successfully");
    fetchCourses();
  } catch (error) {
    console.error(error);
  }
}

const selectedLevel = document.getElementById("levelFilter");
selectedLevel.addEventListener("change", filterLevel);

function filterLevel() {
  console.log(courseData);

  console.log(selectedLevel.value);
  let filteredCourses = courseData.filter(([id, course]) => {
    return course.level === selectedLevel.value;
  });

  console.log(filteredCourses);
  displayCourses(filteredCourses);
}
