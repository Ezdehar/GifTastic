$("#add-topic").on("click", function(event) {
    var person = $(this).attr("data-person");
      
  var queryURL = "https://api.giphy.com/v1/gifs/search?" + topics + "api_key=hHeUKZfzR6ic2S4M2kJJk0m8NVdAnkGL&q=woke&limit=10&offset=0&rating=PG&lang=en";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      var results = response.data;
    for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    var rating = results[i].rating;
    var p = $("<p>").text("Rating: " + rating);
    var still = results[i].images.
      fixed_height_still.url;
    var topicImage = $("<img>");
    topicImage.attr("src", still);
    topicImage.attr("data-still", still);
    topicImage.attr("data-animate", animated);
    topicImage.attr("data-state", "still");
    gifImage.append(p);
    gifImage.append(p);
  
  $("#gifs-appear-here").prepend(gifImage);

      }
    });
  });