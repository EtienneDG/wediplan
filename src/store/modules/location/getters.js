export const getters = {
  locations: state => {
    if (state.locations.locations) {
      return state.locations.locations
      .filter((location) => location.disabled !== true);
    }
    return [];
  }
};
