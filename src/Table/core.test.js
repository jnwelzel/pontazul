import { searchByBrandOrFuel, validateCarForm, compareCarPlates } from './core';
import { INITIAL_DATA } from '../appData';

const SAMPLE_CARS_DATA = INITIAL_DATA.slice();
describe('searchByBrandOrFuel()', () => {
  it('returns cars when searching by fuel property', () => {
    const searchTerm = 'gas';
    const gasolineCarsCount = 1;
    
    const result = searchByBrandOrFuel(SAMPLE_CARS_DATA, searchTerm);
    
    expect(result.length).toEqual(gasolineCarsCount);
  });
  
  it('returns cars when searching by brand property', () => {
    const searchTerm = 'volks';
    const volksCarsCount = 3;
    
    const result = searchByBrandOrFuel(SAMPLE_CARS_DATA, searchTerm);
    
    expect(result.length).toEqual(volksCarsCount);
  });
});

const VALID_FORM_EVENT = {
  preventDefault: () => {},
  target: {
    elements: {
      plateInput: {
        value: 'KEK-6666'
      },
      modelInput: {
        value: 'Fusion'
      },
      brandInput: {
        value: 'Ford'
      },
      imageInput: {
        value: ''
      },
      fuelInput: {
        value: ''
      },
      costInput: {
        value: ''
      }
    }
  }
};
const INVALID_FORM_EVENT = {
  preventDefault: () => {},
  target: {
    elements: {
      plateInput: {
        value: 'KEK-666'
      },
      modelInput: {
        value: ''
      },
      brandInput: {
        value: ''
      },
      imageInput: {
        value: ''
      },
      fuelInput: {
        value: ''
      },
      costInput: {
        value: ''
      }
    }
  }
};
describe('validateCarForm()', () => {
  it('passes if form data is valid', () => {
    const { validationErrors } = validateCarForm(VALID_FORM_EVENT);
    const expectedErrorsCount = 0;
    
    expect(validationErrors.length).toEqual(expectedErrorsCount);
  });
  
  it('fails if form data is invalid', () => {
    const { validationErrors } = validateCarForm(INVALID_FORM_EVENT);
    const expectedErrorsCount = 3;
    
    expect(validationErrors.length).toEqual(expectedErrorsCount);
  });
});

describe('compareCarPlates()', () => {
  it('sorts cars in the array by their plates in ascending order', () => {
    const carsArray = SAMPLE_CARS_DATA.slice();
    const result = carsArray.sort(compareCarPlates);
    const firstLicensePlate = SAMPLE_CARS_DATA[1].placa;
    
    expect(result[0].placa).toEqual(firstLicensePlate);
  })
});
