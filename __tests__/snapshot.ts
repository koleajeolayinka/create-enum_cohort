import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import cohortsReducer, { addCohort, openForm, closeForm } from '@/app/store/cohortsSlice';

describe('cohortsSlice', () => {
  let store: EnhancedStore;

  beforeEach(() => {
    store = configureStore({ reducer: { cohorts: cohortsReducer } });
  });

  it('should add a cohort correctly', () => {
    const newCohort = { id: 1, name: 'Test Cohort', description: 'A test cohort', image: 'test.jpg', programs: 'Test Program', date: '2023-01-01' };
    store.dispatch(addCohort(newCohort));
    expect(store.getState().cohorts.cohorts).toContainEqual(newCohort);
  });

  it('should handle opening the form', () => {
    store.dispatch(openForm());
    expect(store.getState().cohorts.showForm).toBe(true);
  });

  it('should handle closing the form', () => {
    store.dispatch(closeForm());
    expect(store.getState().cohorts.showForm).toBe(false);
  });

  it('should initialize with an empty cohorts array and form closed', () => {
    const initialState = store.getState().cohorts;
    expect(initialState.cohorts).toEqual([]);
    expect(initialState.showForm).toBe(false);
  });

  // Adjusted test case with a complete cohort object
  it('should add a cohort with all required fields', () => {
    const completeCohort = { id: 2, name: 'Complete Cohort', description: 'A complete cohort', image: 'complete.jpg', programs: 'Complete Program', date: '2023-01-02' };
    store.dispatch(addCohort(completeCohort));
    expect(store.getState().cohorts.cohorts).toContainEqual(completeCohort);
  });

  it('should not add a cohort with an existing ID', () => {
    const cohort1 = { id: 3, name: 'Cohort 1', description: 'First cohort', image: '1.jpg', programs: 'Program 1', date: '2023-02-01' };
    const cohortDuplicateId = { ...cohort1, name: 'Cohort Duplicate ID' };
    store.dispatch(addCohort(cohort1));
    store.dispatch(addCohort(cohortDuplicateId));
    expect(store.getState().cohorts.cohorts).toContainEqual(cohort1);
    expect(store.getState().cohorts.cohorts).not.toContainEqual(cohortDuplicateId);
  });
});