export const getters = {
  guests: state => {
    if (state.guests.guests) {
      return state.guests.guests
        .filter((guest) => guest.disabled !== true);
    }
    return [];
  },
  numberOfAdults: state => {
    if (state.guests.guests) {
      return state.guests.guests
        .map((guest) => guest.adulte)
        .reduce((cur, prev) => cur + prev, 0);
    }
  },
  numberOfChildren: state => {
    if (state.guests.guests) {
      return state.guests.guests
        .map((guest) => guest.enfant)
        .reduce((cur, prev) => cur + prev, 0);
    }
  },
  numberOfGuests: (state, getters) => {
    return getters.numberOfAdults + getters.numberOfChildren;
  },
  numberForCocktail: state => {
    if (state.guests.guests) {
      return state.guests.guests
        .filter((guest) => guest.vinhonneur)
        .map((guest) => guest.adulte + guest.enfant)
        .reduce((cur, prev) => cur + prev, 0);
    }
  },
  numberForMeal: state => {
    if (state.guests.guests) {
      return state.guests.guests
        .filter((guest) => guest.repas)
        .map((guest) => guest.adulte + guest.enfant)
        .reduce((cur, prev) => cur + prev, 0);
    }
  }
};
