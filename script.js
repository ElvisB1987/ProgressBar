var price = document.querySelector(".dollar");
var view = document.querySelector(".pageViews");
var chekbox = document.getElementById("mYrange");

let prices = [8, 12, 16, 24, 36];
let views = ["10K", "50K", "100K", "500K", "1M"];

var input = document.querySelector("input[type=range]"),
  style_el = document.createElement("style"),
  styles = [],
  track_sel = ["::-webkit-slider-runnable-track"];
document.body.appendChild(style_el);

styles.push("");

var cheked = false;

// chekbox function  change inner Html text

chekbox.addEventListener("change", function () {
  if (this.checked) {
    cheked = true;
    view.innerHTML = views[input.value / 25] + " PAGEVIEWS";
    price.innerHTML = (
      prices[input.value / 25] -
      prices[input.value / 25] * 0.25
    ).toFixed(2);
  } else {
    cheked = false;
    view.innerHTML = views[input.value / 25] + " PAGEVIEWS";
    price.innerHTML = prices[input.value / 25].toFixed(2);
  }
});

// input Range fill progress with color and change inner html text

input.oninput =

  function () {
    var min = this.min || 0,
      max = this.max || 100,
      c_style,
      u,
      edge_w,
      val,
      str = "";

    this.setAttribute("value", this.value);


    val = this.value + "% 100%";
    str +=
      'input[type="range"]' + track_sel[0] + "{background-size:" + val + "}";

    styles[0] = str;
    style_el.textContent = styles.join("");

    let inputValue = input.value;

    if (!cheked) {
      view.innerHTML = views[inputValue / 25] + " PAGEVIEWS";
      price.innerHTML = prices[inputValue / 25].toFixed(2);
    } else {
      view.innerHTML = views[inputValue / 25] + " PAGEVIEWS";
      price.innerHTML = (
        prices[inputValue / 25] -
        prices[inputValue / 25] * 0.25
      ).toFixed(2);
    }
  };


