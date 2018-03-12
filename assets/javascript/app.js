$("#button").on("click", function() {

    var topic = $(this).attr("data-topic");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=hHeUKZfzR6ic2S4M2kJJk0m8NVdAnkGL&limit=10";
            
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {

        var results = response.data;

        for (var i = 0; i < topics.length; i++) {

          if (result[i].rating !== "r" && results[i].rating !== "pg-13"
            ) {
                var gifDiv = $("<div class='item'>");

                  var rating = results[i].rating;
                  
                  var p = $("<p>").text("Rating: " + rating);
                  
                  var topicImage = $("<img>");
                
                  topicImage.attr("src", results[i].images.fixed_height.url);
                  
                  gifDiv.append(p);
                  gifDiv.append(topicImage);
                  
                  $("#gifs-appear-here").prepend(gifDiv);
                }
        
              }
            });
          });