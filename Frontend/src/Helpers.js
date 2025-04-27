export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('expense-tracker-state');
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('expense-tracker-state', serialisedState);
  } catch (error) {
    // Ignore write errors.
  }
};

// Get item from localstorage
export const getItem = (item, def = undefined) => {
  try {
    const localItem = localStorage.getItem(item);
    if (localItem === null) {
      return def;
    }
    return JSON.parse(localItem);
  }
  catch (e) {
    return undefined;
  }
};

// Save item in localstorage
export const setItem = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
};

// Remove item from localstorage
export const removeItem = (item) => {
  localStorage.removeItem(item);
};

// Check if user logged in from localstorage
export const isLoggedIn = () => {
  return getItem('access_token') && getItem('token_created') && getItem('expires_in');
};

export const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  try {
    // First get the latest rates
    const response = await fetch('https://api.exchangeratesapi.io/v1/latest?access_key=7fcc6fd43064a377f46c614c12b7f847');
    const data = await response.json();
    
    if (!data.success) {
      throw new Error('Failed to fetch exchange rates');
    }

    // Get the rates for both currencies
    const fromRate = data.rates[fromCurrency];
    const toRate = data.rates[toCurrency];

    if (!fromRate || !toRate) {
      throw new Error('Currency not supported');
    }

    // Convert to EUR first (base currency), then to target currency
    const amountInEUR = amount / fromRate;
    const convertedAmount = amountInEUR * toRate;

    return convertedAmount;
  } catch (error) {
    console.error('Currency conversion error:', error);
    return null;
  }
};
