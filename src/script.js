const itJobKeywords = [
  "Software Engineer",
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Web Developer",
  "Java Developer",
  "Python Developer",
  "JavaScript Developer",
  "React Developer",
  "Angular Developer",
  "Vue.js Developer",
  "Node.js Developer",
  "PHP Developer",
  "C++ Developer",
  "C# Developer",
  "Ruby Developer",
  "Go Developer",
  "Rust Developer",
  "Mobile App Developer",
  "Android Developer",
  "iOS Developer",
  "Flutter Developer",
  "Kotlin Developer",
  "Swift Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "AWS Engineer",
  "Azure Engineer",
  "Google Cloud Engineer",
  "Data Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Deep Learning Engineer",
  "Database Administrator",
  "Cybersecurity Specialist",
  "Network Engineer",
  "System Administrator",
  "UI Designer",
  "UX Designer",
  "UI/UX Developer",
  "Game Developer",
  "Embedded Systems Engineer",
  "Blockchain Developer",
  "AR/VR Developer",
  "Big Data Engineer"
];

const ID="68e070cc"
const KEY="df0639785c417f6636ce1b1a50d9fccc"

async function start(){
const url =`http://api.adzuna.com/v1/api/jobs/gb/categories?app_id=${ID}&app_key=${KEY}&&content-type=application/json`
let res = await fetch(url)
let data= await res.json()
showList(data.results)
}

start()


function showList(jobList){
document.getElementById('cat').innerHTML=`
      <select  onchange='loadByCat(this.value)'>
        <option>select the catageries</option>
    ${
        jobList.map(function(list){
        return `<option value="${list.tag}">${list.label}</option>`
            }).join("")
        }
       </select> `
    }



async function loadByCat(catTag){
const url = `http://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${ID}&app_key=${KEY}&category=${catTag}&where=Hyderabad&results_per_page=50&sort_by=date`;
let res = await fetch(url)
let data = await res.json();
showJobs(data.results)
}



function showJobs(jobList) {
  document.getElementById("jobs").innerHTML = jobList.map(job => `
    <div class="job-card">
      <h3>${job.title}</h3>
      <p class="company"><strong>Company:</strong> ${job.company.display_name}</p>
      <p class="location"><strong>Location:</strong> ${job.location.display_name}</p>
      <p><strong>Category:</strong> ${job.category.label}</p>
      <p><strong>Posted on:</strong> ${new Date(job.created).toLocaleDateString()}</p>
      <p class="desc">${job.description.slice(0, 200)}... <a href="${job.redirect_url}" target="_blank">Read more</a></p>
      <a class="apply-btn" href="${job.redirect_url}" target="_blank">Apply</a>
    </div>
  `).join("");
}


//  TO DO: drop down for the qurey search on technologies
//  pagination for the more data 
//  may be the location drop down 
