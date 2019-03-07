class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {

    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {

    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {

    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    if (this.numberOfVampiresFromOriginal === 0) {
      return true;
    } else if (vampire.numberOfVampiresFromOriginal === 0) {
      return false;
    } else if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else if (this.numberOfVampiresFromOriginal >= vampire.numberOfVampiresFromOriginal) {
      return false;
    }

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

// Original Vampire
const original = new Vampire("Original", 800);

// Vampire Bart
const bart = new Vampire("Bart", 900);

// Vampire Ansel
const ansel = new Vampire("Ansel", 1200);

// Vampire Elgort
const elgort = new Vampire("Elgort", 1400);

// Vampire Sarah
const sarah = new Vampire("Sarah", 1800);

// Vampire Andrew
const andrew = new Vampire("Andrew", 1985);



original.addOffspring(bart)
original.addOffspring(ansel)

ansel.addOffspring(sarah)
ansel.addOffspring(elgort)

ansel.addOffspring(andrew)

module.exports = Vampire;
