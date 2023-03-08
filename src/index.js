function calc() {
  const name = document.getElementById("name").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.getElementsByName("gender");
  const res1 = document.getElementById("res1");
  const res2 = document.getElementById("res2");
  const yd = parseInt(document.getElementById("yearsold").value);

  // console.log(typeof height);
  // console.log(typeof weight);
  // console.log(yd);

  if (name !== "" && height !== "" && weight !== "") {
    const first = height * height;
    const valorIMC = (weight / first).toFixed(2);

    //console.log(valorIMC);

    let tipo = "";

    if (valorIMC < 18.5) {
      tipo = "abaixo do peso.";
    } else if (valorIMC < 25) {
      tipo = "com peso ideal. Parabéns!!!";
    } else if (valorIMC < 30) {
      tipo = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      tipo = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      tipo = "com obesidade grau II";
    } else {
      tipo = "com obesidade grau III. Cuidado!!";
    }

    res1.innerText = `${name} seu IMC é de ${valorIMC} e você está ${tipo}`;

    let genderSelection = "";
    let heightCEM = height * 100;

    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genderSelection = gender[i].value;
        //console.log("Escolheu: " + gender[i].value);

        switch (genderSelection) {
          case "F":
            const womankcal = (
              9.56 * weight +
              1.85 * heightCEM -
              4.68 * yd +
              665
            ).toFixed(2);
            res2.innerText = `O recomendado é que você consuma até ${womankcal} calorias por dia.`;
            break;
          case "M":
            const mankcal = (
              13.75 * weight +
              5 * heightCEM -
              6.76 * yd +
              66.5
            ).toFixed(2);
            res2.innerText = `O recomendado é que você consuma até ${mankcal} calorias por dia.`;
            break;
          default:
            break;
        }
      }
    }
  }
}
