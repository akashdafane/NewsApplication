import { createSelector } from 'reselect';

const getPhotosSelector = state => state.photos.items;
const getSortKeySelector = state => state.photos.sortKey;
const getSortDirectionSelector = state => state.photos.sortDirection;

export const getSortedPhotosSelector = createSelector(
  getPhotosSelector,
  getSortKeySelector,
  getSortDirectionSelector,
  (photos, sortKey, sortDirection) => {
    if (sortKey === 'created_at' && sortDirection === 'asc') {
      return photos.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (sortKey === 'created_at' && sortDirection === 'desc') {
      return photos.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else {
      return photos;
    }
  }
);