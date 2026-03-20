const fetchReadme = async () => {
  const res = await fetch('https://raw.githubusercontent.com/dhruvbhavsar0612/dhruvbhavsar0612/main/README.md');
  const text = await res.text();
  console.log(text);
};
fetchReadme();
