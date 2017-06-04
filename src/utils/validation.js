export const isLicensePlate = plate => (
  plate.match(/[A-Z]{3}-?\d{4}/gim) !== null
);
