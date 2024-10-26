const form = document.querySelector("form");

form.addEventListener("submit", createCourse);

function createCourse() {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const instructor = document.getElementById("instructor").value;
  const lectures = document.getElementById("lectures").value;
  const level = document.getElementById("level").value;
  const price = document.getElementById("price").value;
  const rating = document.getElementById("rating").value;
  const reviews = document.getElementById("reviews").value;
  const hrs = document.getElementById("hrs").value;
  const bestseller = document.getElementById("bestseller").checked;
  const courseData = {
    title,
    instructor,
    rating,
    reviews,
    price,
    total_hours: hrs,
    lectures,
    level,
    bestseller,
  };
  console.log(courseData);
  postData(courseData);
}

async function postData(course) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const userID = Math.floor(Math.random() * 10000) + 1;

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(course),
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://mock-apis-144c0-default-rtdb.firebaseio.com/courses/${userID}.json`,
      requestOptions
    );
    const res = await response.json();
    console.log(res);
    alert("Course created successfully");
    window.location.href = "books.html";
  } catch (error) {
    console.error(error);
  }
}
