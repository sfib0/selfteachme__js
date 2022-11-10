// Allow units, numbers, spaces and words which contains no spaces.
const regex = /^[\w\s\d]+$/;

function getEls(btnId, inpId, valId) {
  const btn = document.getElementById(btnId);
  const type = document.getElementById(inpId);
  const val = document.getElementById(valId);
  return [btn, type, val];
}

function changeStyle(btnId, inpId, valId) {
  const [btn, type, val] = getEls(btnId, inpId, valId);
  if (val.value.match(regex)) {
    return btn.style[type.value] = val.value;
  } else {
    return alert("Put correct value");
  }
}

const linkEl = document.getElementById("button");

// Check only inline styles
const inlineLinkStyles = linkEl.style.margin;
console.log(inlineLinkStyles);

// Check computed styles
const computedLinkStyles = window.getComputedStyle(linkEl).getPropertyValue("margin");
console.log(computedLinkStyles);
