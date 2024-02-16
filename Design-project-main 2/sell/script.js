function submitSellItem() {
    var itemName = document.getElementById("itemName").value;
    var itemDescription = document.getElementById("itemDescription").value;
    var askingPrice = document.getElementById("askingPrice").value;
  
    // Validation (you may add more validation as needed)
    if (!itemName || !itemDescription || !askingPrice) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Dummy code to display submitted data (replace with your actual handling logic)
    alert(`Item Name: ${itemName}\nDescription: ${itemDescription}\nAsking Price: $${askingPrice}`);
    
    // Reset the form after submission (optional)
    document.getElementById("sellItemForm").reset();
  }

  