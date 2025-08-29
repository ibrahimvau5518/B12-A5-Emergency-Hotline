// getElement function
function getElement(id) {
  return document.getElementById(id);
}

// sidebarHistory
const sidebarHistory = getElement('historyDetails');

// Event delegation on card-container
getElement('card-container').addEventListener('click', function (e) {
  // ❤️ Heart click & increase
  if (e.target.className.includes('fa-heart')) {
    const heartCountDisply = getElement('heartCountDisply');
    const heartCountDisplyConvert = parseInt(heartCountDisply.innerText);
    heartCountDisply.innerText = heartCountDisplyConvert + 1;
  }

  // 📞 Call button click
  if (e.target.className.includes('callButton')) {
    const coin = getElement('coinDisplay');
    let coinNumber = parseInt(coin.innerText);

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    if (coinNumber >= 20) {
      const callButton = e.target;
      const card = callButton.closest('.card2');

      const cardTitle = card.querySelector('h3').innerText;
      const contactCategory = card.querySelector('p').innerText;
      const contactNumber = card.querySelector('h2').innerText;

      alert(`${cardTitle}\n📞 Calling ${contactCategory} ${contactNumber}...`);

      // Decrease coins
      coinNumber -= 20;
      coin.innerText = coinNumber;

      // Add to call history
      const newSidebarCard = document.createElement('div');
      newSidebarCard.innerHTML = `
        <div class="flex justify-between bg-white rounded-md">
          <div>
            <h1 class="text-[10px] md:text-sm">${cardTitle}</h1>
            <p class="text-[10px] md:text-sm">${contactNumber}</p>
            <br>
          </div>
          <div class="text-[10px] md:text-sm">${hours}:${minutes}:${seconds} ${ampm}</div>
        </div>`;
      sidebarHistory.appendChild(newSidebarCard);
    } else {
      alert(
        "❌ You don't have enough coins! You need at least 20 coins to make a call."
      );
    }
  }


  // copy button method
  if (e.target.className.includes('copyBtn')) {
 
    const copyCounterDisply = getElement('copyCounterDisply');
    let copyNumber = parseInt(copyCounterDisply.innerText);
    copyCounterDisply.innerText = copyNumber + 1;


    const card = e.target.parentNode.parentNode;
    const cardTitle = card.querySelector('h3').innerText;
    const contactNumber = card.querySelector('h2').innerText;

    alert(cardTitle + '\nNumber copied: ' + contactNumber);

    navigator.clipboard.writeText(contactNumber);
  }
});


// clear button method 
const clearBtn = getElement('clear-btn');
clearBtn.addEventListener('click', function () {
  sidebarHistory.innerText = ""
})