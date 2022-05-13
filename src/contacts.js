const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  var html = []
  for (let i = 0; i < 50000; i++) html.push('<div class="contact">' + i + '</div>')
  contacts.insertAdjacentHTML('beforeend', html.join(''))
}

let requested = false
contacts.addEventListener("scroll", (e) => {
  if (!requested) {
    window.requestAnimationFrame(function() {
      const items = Array.from(contacts.getElementsByClassName("contact"));
      const topItemIndex = items.findIndex((e) => contacts.scrollTop - e.offsetTop <= -18)
      stickyHeader.textContent = items[topItemIndex].textContent;
      requested = false
  });
  requested = true
}
});

addContacts();