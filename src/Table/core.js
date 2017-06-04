import { isLicensePlate } from '../utils/validation';

export const searchByBrandOrFuel = (carsArray = [], searchTerm = '') => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  
  const result = carsArray.filter(car => (
    (car.marca.toLowerCase().startsWith(lowerCaseSearchTerm) || car.combustivel.toLowerCase().startsWith(lowerCaseSearchTerm))
  ))
  
  return result
}

export const validateCarForm = event => {
  event.preventDefault();
  const validationErrors = [];
  const formFields = event.target.elements;
  const plateInput = formFields.plateInput.value.trim().toUpperCase(),
    modelInput = formFields.modelInput.value.trim(),
    brandInput = formFields.brandInput.value.trim(),
    imageInput = formFields.imageInput.value.trim(),
    fuelInput = formFields.fuelInput.value.trim(),
    costInput = formFields.costInput.value.trim()
    
  if (!plateInput) {
    validationErrors.push('Informe a placa');
  } else if (!isLicensePlate(plateInput)) {
    validationErrors.push('Placa inválida');
  }
  
  if (!modelInput) {
    validationErrors.push('Informe o modelo');
  }
  
  if (!brandInput) {
    validationErrors.push('Informe a marca');
  }
  
  return { validationErrors, plateInput, modelInput, brandInput, imageInput, fuelInput, costInput };
}
