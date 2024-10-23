const requestOptions = {
  method: "GET",
};
var jobsData = [];
async function fetchJobsList() {
  let resp = await fetch(
    "https://6717be3fb910c6a6e029c217.mockapi.io/api/jobList",
    requestOptions
  );
  let data = await resp.json();
  jobsData = data;
  displayJobs(data);
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
                <a href="#">Details</a>
              </div>
      </div>
      `;
  });
  document.getElementById("job-list").innerHTML = jobCards;
}

document.getElementById("sortBySalary").addEventListener("change", sortJobs);

function sortJobs() {
  const sortVal = document.getElementById("sortBySalary").value;

  console.log(sortVal, "check");

  if (sortVal === "asc") {
    jobsData.sort((a, b) => a.salary - b.salary);
  } else if (sortVal === "desc") {
    jobsData.sort((a, b) => b.salary - a.salary);
  }
  displayJobs(jobsData);
}
