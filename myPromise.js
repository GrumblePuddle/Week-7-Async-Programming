// PART 1

const Dice = () => {
  new Promise((resolve, reject) => {
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice > 1) {
      resolve(dice);
    } else {
      reject("Dice rolled to 1");
    }
  });
};

// PART 2

const Advice = (id) => {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.slip.advice);
    })
    .catch(() => {
      throw new Error("Advice not found");
    });
};

// PART 3

const randomAdviceOnDiceRoll = () => {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dice = Math.floor(Math.random() * 6) + 1;
      if (dice !== 6) {
        console.log("Dice did not roll to 6");
      } else {
        const id = data.slip.id;
        Advice(id);
      }
    })
    .catch(() => {
      throw new Error("Advice not found");
    });
};

randomAdviceOnDiceRoll();
