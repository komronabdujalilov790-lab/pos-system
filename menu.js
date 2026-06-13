// menu.js — faqat index.html uchun

function filterProducts(query) {
  var q = query.toLowerCase();
  document.querySelectorAll('#product-grid .card').forEach(function(card) {
    var name = card.getAttribute('data-name').toLowerCase();
    card.style.display = name.includes(q) ? 'block' : 'none';
  });
}

function filterCategory(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#product-grid .card').forEach(function(card) {
    card.style.display = (cat === 'all' || card.getAttribute('data-cat') === cat) ? 'block' : 'none';
  });
}
