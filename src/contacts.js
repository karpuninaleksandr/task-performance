const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  var html = []
  for (let i = 0; i < 50000; i++) html.push('<div class="contact">' + i + '</div>')
  contacts.insertAdjacentHTML('beforeend', html.join(''))
}

contacts.addEventListener("scroll", () => {
  const offsetTop_from = document.getElementsByClassName('contact')[0]
  stickyHeader.textContent = parseInt(contacts.scrollTop / offsetTop_from.offsetTop)
});

addContacts();