 $("button").on("click", function() {
      var topics = ["Woke", "Meta Physics", "The universe", "Spirituality"];
      var topics = $(this).attr("data-topic");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=hHeUKZfzR6ic2S4M2kJJk0m8NVdAnkGL=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
      var results = response.data
      
      for (var i = 0; i < topic.length; i++) {
      var gifDiv = $("<button>");

      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);

      var topicImage = $("<img>");
      topicImage.attr("src", results[i].images.fixed_height.url);

      gifImage.append(p);
      gifImage.append(topicImage);
      
      $("#gifs-appear-here").prepend(gifDiv);
      }
    });
  });