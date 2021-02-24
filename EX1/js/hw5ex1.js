const square = {
  side: 2,


  // Return the character description
  describe() {
    return `Square with side 2 has has a permiter of ${perimiter} , area of ${area} and diagonal of ${diagonal} `;
  }
};

//Permiter
perimiter = square.side *= 4;

//Area
area = square.side /=2;

//diagonal 
diagonal = square.side /= square.side


console.log(square.describe());
