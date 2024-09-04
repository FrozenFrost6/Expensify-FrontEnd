import filtersSlice from "../../slices/filtersSlice";


test("should setup default filter values", () => {
    const state = filtersSlice(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        groupBy: '',
        startDate: null,
        endDate: null
    });
})

test("should set text filter", () => {
    const state = filtersSlice(undefined, { type: 'filters/setTextFilter', payload: 'hi'});
    expect(state).toEqual({
        text: 'hi',
        sortBy: 'date',
        groupBy: '',
        startDate: null,
        endDate: null
    });
});

test("should set groupby filter", () => {
    const state = filtersSlice(undefined, { type: 'filters/setGroupByFilter', payload: 'Food'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        groupBy: 'Food',
        startDate: null,
        endDate: null
    });
});



test("should set sort by to amount", () => {
    const state = filtersSlice(undefined, { type: 'filters/setSortByAmountFilter'});
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        groupBy: '',
        startDate: null,
        endDate: null
    });
});

test("should set sort by to date", () => {
    const state = filtersSlice(undefined, { type: 'filters/setSortByDateFilter'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        groupBy: '',
        startDate: null,
        endDate: null
    });
});

test("should set startDate filter", () => {
    const state = filtersSlice(undefined, { type: 'filters/setStartDateFilter', payload: 123});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        groupBy: '',
        startDate: 123,
        endDate: null
    });
});


test("should set endDate filter", () => {
    const state = filtersSlice(undefined, { type: 'filters/setEndDateFilter', payload: 456});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        groupBy: '',
        startDate: null,
        endDate: 456
    });
});