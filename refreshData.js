function refreshData(url, data) {
    data.length = 0;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Accept", "application/json");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        str = xhr.responseText;
        var array = JSON.parse("[" + str + "]");
        array.forEach((element) => {
          data.push(element);
        });
      }
    };
    xhr.send();
  };