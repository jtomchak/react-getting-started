
(function(){
    let btn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode("Toggle Tests"));
    btn.id = 'toggle-tests';
    let stats = document.getElementById('mocha-stats');
    stats.appendChild(btn);
    document.getElementById('mocha-report').style.display = 'none';;
    document.getElementById('toggle-tests').addEventListener("click", function(){
        mochaReport =  document.getElementById('mocha-report');
        mochaReport.style.display = mochaReport.style.display === 'block' ? 'none' : "block"
    })
})()
