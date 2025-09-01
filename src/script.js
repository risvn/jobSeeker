async function start(){

const ID="68e070cc"
const KEY="df0639785c417f6636ce1b1a50d9fccc"

const url =`http://api.adzuna.com/v1/api/jobs/gb/categories?app_id=${ID}&app_key=${KEY}&&content-type=application/json`
let res = await fetch(url)
let data= await res.json()
showList(data.results)
}

start()


function showList(jobList){

document.getElementById('cat').innerHTML=`<select>
        <option>select the catageries</option>
    ${
        jobList.map(function(list){
        return `<option>${list.label}</option>`
            })}
       </select> `
    }
