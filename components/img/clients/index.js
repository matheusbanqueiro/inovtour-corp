// index.js
const requireContext = require.context('./', false, /\.(png|jpe?g|svg)$/);

const images = [];
const imagesSet = new Set();

requireContext.keys().forEach((file) => {
  const name = file.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '').replace(/_/g, ' ').replace(/-/g, ' ');
  const src = requireContext(file).default;

  if (!imagesSet.has(src)) {
    imagesSet.add(src);
    images.push({ name, src });
  }
});

console.log('All images:', images);

export default images;
