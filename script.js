function getData(){return JSON.parse(localStorage.getItem('phishshieldData')||'{"reports":0,"clicks":0,"ignores":0,"lessons":0}')}
function saveData(d){localStorage.setItem('phishshieldData',JSON.stringify(d))}
function choose(action){
 const d=getData();
 if(action==='report'){d.reports++;show('Good choice. Reporting suspicious messages helps security teams investigate them.')}
 if(action==='verify'){d.clicks++;show('Simulation triggered. No credentials were requested or stored. Review the red flags below.')}
 if(action==='ignore'){d.ignores++;show('Ignoring is safer than clicking, but reporting the message is usually more useful for an organization.')}
 saveData(d);
 function show(t){document.getElementById('feedback').innerHTML='<strong>'+t+'</strong><br><a href="training-login.html" style="color:#ff5a5a">Review the training lesson →</a>'}
}
function markLesson(){const d=getData();d.lessons++;saveData(d);location.href='results.html'}
function loadResults(){const d=getData();['reports','clicks','ignores','lessons'].forEach(k=>{const e=document.getElementById(k);if(e)e.textContent=d[k]})}
function resetData(){localStorage.removeItem('phishshieldData');loadResults()}
loadResults();