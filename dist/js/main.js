const plans = document.querySelectorAll(".plan");

const activePlan = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.toggle("active");
};

plans.forEach((plan) => {
  plan.addEventListener("click", activePlan);
});
