# Hamburger-menu
Hamburger menu html css javascript
 
  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <style>
       
body {
    margin: 0;
    padding: 0;
    background: gainsboro;
}

#container {
    position: relative;
    width: 100px;
    margin: 400px auto;
    cursor: pointer;
}

span {
    position: relative;
    display: block;
    width: 100px;
    height: 10px;
    background: #666666;
    margin-bottom: 10px;
    top: 0;
    border-radius: 10px;
    transition: all .4s;
}

#container.play span:nth-child(2), #container.play span:nth-child(3){
    width: 0;
    opacity: 0;
}

#container.play span:nth-child(1) {
    transform: rotate(-45deg);
    top: 30px;
}

#container.play span:nth-child(4) {
    transform: rotate(45deg);
    top: -30px;
}
     </style>
    <title>berger</title>
</head>
<body>

    <div id="container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <script>
    
    </script>
</body>
</html>
