let container = document.getElementById("container");
let brexBtn = document.getElementById("brex");
let stripeBtn = document.getElementById("stripe");
let amexBtn = document.getElementById("amex");
let vendor = document.getElementById("vendor");
let media = document.getElementById("media");
let corp = document.getElementById("corp");
let team = document.getElementById("team");
let unlimitedRewards = document.getElementById("unlimitedRewards");
let lifeTimeRewards = document.getElementById("lifeTimeRewards");
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let brexPer = (0.3 / 2.9) * 100;
let stripePer = 100;
let amexPer = (1.3 / 2.9) * 100;
let unlimitedRewardsPer = (1.1 / 2.9) * 100;
let lifeTimeRewardsPer = (1.2 / 2.9) * 100;

///////////////////////////////////////////////////////////////////////
let vals = function () {
  let v = vendor.value;
  let x = media.value;
  let y = corp.value;
  let z = team.value;

  total = Number(v) + Number(x) + Number(y) + Number(z);
  let unlimitedRewardsVal = Number(total) * 1.1;
  let lifetimerewardsVal = Number(total) * 1.2;
  unlimitedRewards.textContent =
    "unlimited Rewards :" + unlimitedRewardsVal + "$";
  lifeTimeRewards.textContent =
    "life Time Rewards :" + lifetimerewardsVal + "$";
  bar2.style.width = "37.931034482758626%";
  bar3.style.width = "41.37931034482759%";
  return total;
};
/////////////////////////////////////////////////////////////////////
function check() {
  if (
    vendor.value != "" &&
    media.value != "" &&
    corp.value != "" &&
    team.value != ""
  ) {
    vals();
    brexBtn.removeAttribute("disabled");
    stripeBtn.removeAttribute("disabled");
    amexBtn.removeAttribute("disabled");
  }
  if (
    vendor.value == "" ||
    media.value == "" ||
    corp.value == "" ||
    team.value == ""
  ) {
    brexBtn.setAttribute("disabled", "");
    stripeBtn.setAttribute("disabled", "");
    amexBtn.setAttribute("disabled", "");
  }
}

/////////////////////////////////////////////////////////////////////
let brex = function () {
  bar1.style.width = "10.344827586206897%";
  brexBtn.classList.add("active");
  if (
    stripeBtn.classList.contains("active") ||
    amexBtn.classList.contains("active")
  ) {
    stripeBtn.classList.remove("active");
    amexBtn.classList.remove("active");
  }
  container.style.display = "none";
  let total = vals();
  let brex = total * 0.3;
  document.getElementById("brand").textContent = "Brex :" + brex + "$";

  console.log("brex is " + brex);
  return brex;
};
///////////////////////////////////////////////////////////////////////
let stripe = function () {
  bar1.style.width = "100%";
  stripeBtn.classList.add("active");

  if (
    brexBtn.classList.contains("active") ||
    amexBtn.classList.contains("active")
  ) {
    brexBtn.classList.remove("active");
    amexBtn.classList.remove("active");
  }
  container.style.display = "none";
  let total = vals();
  let stripe = total * 2.9;
  document.getElementById("brand").textContent = "Stripe :" + stripe + "$";

  console.log("stripe is " + stripe);
  return stripe;
};
///////////////////////////////////////////////////////////////////////
let amex = function () {
  bar1.style.width = "44.827586206896555%";
  amexBtn.classList.add("active");
  if (
    brexBtn.classList.contains("active") ||
    stripeBtn.classList.contains("active")
  ) {
    brexBtn.classList.remove("active");
    stripeBtn.classList.remove("active");
  }
  container.style.display = "none";
  let total = vals();
  let amex = total * 1.3;
  document.getElementById("brand").textContent = "Amex :" + amex + "$";

  console.log("amex is " + amex);
  return amex;
};
function back() {
  container.style.display = "flex";
}
//////////////////////////////////////////////////
