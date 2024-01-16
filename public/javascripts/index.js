async function objectTag(url) {
    url = 'http://localhost:3000/api/objects';
    const response = await fetch(url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);
  };