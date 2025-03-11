// Change the code to use async/await instead of .then/.catch.
// PART 1

const Dice = () => {
  return new Promise((resolve, reject) => {
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice > 1) {
      resolve(dice);
    } else {
      reject("Dice rolled to 1");
    }
  });
};
const diceResult = async () => {
  try {
    const result = await Dice();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// PART 2

const Advice = async (id) => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const data = await response.json();
    console.log(data.slip.advice);
  } catch (error) {
    throw new Error("Advice not found");
  }
};

// PART 3

const randomAdviceOnDiceRoll = async () => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 6) {
      console.log("Dice did not roll to 6");
    } else {
      const id = data.slip.id;
      await Advice(id);
    }
  } catch (error) {
    throw new Error("Advice not found");
  }
};

randomAdviceOnDiceRoll();
