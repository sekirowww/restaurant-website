let cart-buttons = document.getElementById("cart-buttons");
          cart-buttons.addEventListener("click", function(event) {
                  switch (event.target.id) {
                      case "pay":
                          const payment = document.getElementById("payment");
                          payment.scrollIntoView();
                          break
                  };
              });