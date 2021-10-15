
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // C
console.log(hasDriversLicense || hasGoodVision); // D
console.log(!hasDriversLicense); // E

const shouldDrive = hasDriversLicense && hasGoodVision;
console.log(`Can sarah drive? ${shouldDrive}`); // F