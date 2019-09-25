exports.seed = function(knex) {
  return knex("quotes").insert([
    { author: "Confucius", quote: "Our greatest glory is not in never falling, but in rising every time we fall." },
    { author: "Walt Disney", quote: "All our dreams can come true, if we have the courage to pursue them." },
    { author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." }
  ]);
};
