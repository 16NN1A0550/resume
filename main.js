function loadjson(file){
	return new Promise((reslove,reject)=>{
		return fetch(file).then(res=>{
			if(res.ok){
				reslove(res.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var fetchedData=loadjson("data.json");
fetchedData.then(data=>{
	console.log(data);
	career(data.career);
})
var childTwo=document.querySelector(".child2");
console.log(childTwo);

function career(car)
{
	var heading=document.createElement("h3");
	heading.textContent="career objective";
	childTwo.append(heading);
}