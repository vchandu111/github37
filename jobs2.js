const requestOptions = {
  method: "GET",
};
var jobsData = [];

let currentPage = 1;

const limit = 10;
// No of jobs per page

let sortVal = document.getElementById("sortBySalary");
sortVal.addEventListener("change", fetchJobsList);
let filterByType = document.getElementById("filtering");
filterByType.addEventListener("change", fetchJobsList);

async function fetchJobsList() {
  let apiUrl = `https://6717be3fb910c6a6e029c217.mockapi.io/api/jobList?page=${currentPage}&limit=${limit}`;

  console.log(sortVal, "sort val");
  if (sortVal.value === "asc" || sortVal.value === "desc") {
    apiUrl += `&sortBy=salary&order=${sortVal.value}`;
  }

  if (filterByType.value === "fulltime") apiUrl += `&fullTime=true`;
  else if (filterByType.value === "parttime") apiUrl += "&fullTime=false";

  let resp = await fetch(apiUrl, requestOptions);

  let data = await resp.json();
  jobsData = data;
  const updatedArray = jobsData.filter((el, index) => {
    return index >= (currentPage - 1) * 4 && index < currentPage * 4;
  });
  displayJobs(updatedArray);
  updatePageInfo();
}
fetchJobsList();
function displayJobs(array) {
  console.log(array);
  let jobCards = "";
  array.forEach((job) => {
    let date = job.createdAt.split("T")[0];
    jobCards += `
        <div class="job-card">
          <div class='date'>${date}</div>
          <div class="job-content">
              <h2>${job.company} (${job.role})</h2>
          </div>
          <div class="job-tags">
          <span>${job.fullTime ? "Full-Time" : "Part-Time"}</span>
          <span>${job.country}</span>
        </div>
        <div class="job-footer">
                  <p>$${job.salary}/hr</p>
                  <a href="./jobDetails.html?jobId=${job.id}">Details</a>
                </div>
        </div>
        `;
  });
  document.getElementById("job-list").innerHTML = jobCards;
}

function changePage(dir) {
  // page = 1, prev
  if (dir === "next") currentPage += 1;
  else if (dir === "prev" && currentPage > 1) currentPage -= 1;
  //   page = 1
  //   fetchJobsList();
  const updatedArray = jobsData.filter((el, index) => {
    return index >= (currentPage - 1) * 4 && index < currentPage * 4;
  });
  displayJobs(updateArray);
}

function updatePageInfo() {
  document.getElementById("page-info").textContent = `Page ${currentPage}`;
}
