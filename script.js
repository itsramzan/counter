const counters = document.querySelector(".counters");
const counts = [...Array(12).keys()];

counts.forEach((count, index) => {
  counters.innerHTML += `
    <div class="counter">
        <p>Counter No : ${index + 1}</p>
        <h3 class="count">${count}</h3>
        <div class="action">
            <button id="inc" data-index="${index}">Increment</button>
            <button id="res" data-index="${index}">Reset</button>
            <button id="dec" data-index="${index}">Decrement</button>
        </div>
    </div>
    `;
});

counters.addEventListener("click", (e) => {
  const countsEl = document.querySelectorAll(".count");

  if (["inc", "res", "dec"].includes(e.target.id)) {
    let index = parseInt(e.target.dataset.index);
    const id = e.target.id;

    if (id === "inc") counts[index]++;
    if (id === "res") counts[index] = 0;
    if (id === "dec") counts[index]--;
    countsEl[index].textContent = counts[index];
  }
});
