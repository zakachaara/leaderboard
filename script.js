// Import ProgressBar.js
// var ProgressBar = require("progressbar.js");
document.addEventListener("DOMContentLoaded", function () {
    const percentage = document.getElementById("percentage");
  
    percentage.addEventListener("input", function () {
      if (percentage.value > 100) {
        percentage.value = 100; // Force value to 100 if exceeded
      } else if (percentage.value < 0) {
        percentage.value = 0; // Prevent negative values
      }
    });
  });
  
// Ensure script runs after the DOM loads
document.addEventListener("DOMContentLoaded", function () {
  const percentage = document.getElementById("percentage");
  const container = document.getElementById("container");
  
  window.submit = function () {
    let per = Number(percentage.value);
    container.innerHTML = ""
    var bar = new ProgressBar.Circle(container, {
      color: "#aaa",
      strokeWidth: 4,
      trailWidth: 2,
      easing: "easeInOut",
      duration: 1400,
      text: { autoStyleContainer: false },
      from: { color: "#aaa", width: 1 },
      to: { color: "#355", width: 4 },
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
        circle.path.setAttribute("stroke-width", state.width);
        var value = Math.round(circle.value() * 100);
        circle.setText(value === 0 ? "" : value);
      },
    });

    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = "2rem";

    bar.animate(per / 100);
  };
});


// const teams = [
//     { name: "Team A", score: 0 },
//     { name: "Team B", score: 0 },
//     { name: "Team C", score: 0 }
// ];

// function updateLeaderboard() {
//     const container = d3.select("#leaderboard");

//     // Clear the leaderboard before updating (prevents hierarchy errors)
//     container.html("");

//     teams.forEach(team => {
//         const row = container.append("div") // Create a row for each team
//             .style("display", "flex")
//             .style("align-items", "center")
//             .style("margin", "5px 0");

//         row.append("div") // Create the progress bar
//             .style("background", "green")
//             .style("height", "25px")
//             .style("width", `${80 + team.score * 10}px`)
//             .style("color", "white")
//             .style("text-align", "right")
//             .style("padding-right", "5px")
//             .text(team.name);

//         row.append("span") // Add the score at the end
//             .style("margin-left", "10px")
//             .style("font-weight", "bold")
//             .text(team.score);
//     });
// }

// function updateLeaderboard() {
//     const container = d3.select("#leaderboard")
//         .selectAll("div")
//         .data(teams)
//         .join("div")
//         .style("display", "flex")  // Use flexbox for score positioning
//         .style("align-items", "center")  // Align text vertically
//         .style("margin", "5px 0");

//     // container.selectAll("div").remove();  // Clear previous bars

//     container.append("div")
//         .style("background", "green")  // Set bar color to green
//         .style("height", "25px")
//         .style("width", d => `${80 + d.score * 10}px`)
//         .style("color", "white")
//         .style("text-align", "right")  // Align text to right end of bar
//         .style("padding-right", "5px")
//         .text(d => d.name);

//     container.append("span")
//         .style("margin-left", "10px")
//         .style("font-weight", "bold")
//         .text(d => d.score);
// }
// const teams = [
//     { name: "Team A", score: 0 },
//     { name: "Team B", score: 0 },
//     { name: "Team C", score: 0 }
// ];

// function updateLeaderboard() {
//     d3.select("#leaderboard").selectAll("div")
//         .data(teams)
//         .join("div")
//         .style("width", d => `${80 + d.score * 5}px`)
//         .style("heigth", "30px")
//         .style("background", "blue")
//         .style("border", "red")
//         .style("color", "white")
//         .style("margin", "5px")
//         .text(d => ` ${d.name} (${d.score})`);
// }

// // Simulate submissions
// setInterval(() => {
//     let team = teams[Math.floor(Math.random() * teams.length)];
//     // let team = teams[0];
//     team.score += Math.floor(Math.random() * 10);
//     updateLeaderboard();
// }, 1000);

// updateLeaderboard();
