document.getElementById("verseSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const book = document.getElementById("bookInput").value;
  const chapter = document.getElementById("chapterInput").value;
  const verse = document.getElementById("verseInput").value;
  if (book === "" || chapter === "" || verse === "")
    return;
  console.log(book);
  console.log(chapter);
  console.log(verse);

  const url = "https://bible-api.com/" + book + "+" + chapter + ":" + verse;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<div class="verseText"><h2>' + json.reference + '</h2>';
      results += '<p>' + json.text + '</p></div>';
      document.getElementById("verseResults").innerHTML = results;
    })
});
