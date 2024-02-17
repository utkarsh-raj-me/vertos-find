function submitForm() {
  const itemName = document.getElementById('itemName').value;
  const askingPrice = document.getElementById('askingPrice').value;
  const imageUrl = document.getElementById('imageUrl').value;

  // Create a data object to send to the server
  const data = {
    itemName,
    askingPrice,
    imageUrl,
    // Add other fields as needed
  };

  // Use fetch to send a POST request to the server
  fetch('/sell', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    console.log('Sell request successful:', result);
    // Optionally, you can redirect the user or perform other actions here
  })
  .catch(error => {
    console.error('Error selling item:', error);
    // Handle errors or display an error message to the user
  });
}

  