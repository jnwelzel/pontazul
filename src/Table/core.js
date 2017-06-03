export const searchByBrandOrFuel = (carsArray = [], searchTerm = '') => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  
  const result = carsArray.filter(car => (
    (car.marca.toLowerCase().startsWith(lowerCaseSearchTerm) || car.combustivel.toLowerCase().startsWith(lowerCaseSearchTerm))
  ))
  
  return result
}
