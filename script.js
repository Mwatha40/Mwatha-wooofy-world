//fetch from the json api
fetch( "https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(json => console.log(json));
```
fetch("https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg", postRequest)
          .then((res) => res.json())
          .then(res => console.log(res)) 
 
```css