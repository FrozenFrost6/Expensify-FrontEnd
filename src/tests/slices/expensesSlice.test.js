import expensesSlice from "../../slices/expensesSlice";
import { v4 as uuidv4 } from 'uuid';
import expensesReducer, {
  addExpense,
  removeExpense,
  editExpense,
  addExpenseType,
  removeExpenseType,
  editExpenseType
} from '../../slices/expensesSlice'; // Adjust the path as necessary

test("Should test default state", () => {
    const state = expensesSlice(undefined, { type: 'filters/setSortByDateFilter'});
    expect(state).toEqual({ 
        expenses: [],
        expenseTypes: [
            'Food',
            'Groceries',
            'Fuel',
            'Entertainment',
            'House maintenance',
            'Product',
            'Clothes',
            'Investments',
            'Health',
            'Bills',
            'Fees',
            'Transport',
            'Other'
        ]
      });
})




test('should add an expense', () => {
    const expense = {
        id: uuidv4(),
        type: 'Food',
        description: 'Lunch',
        amount: 10,
        owedTo: 'John',
        createdAt: 1000
    };

    const initialState = { expenses: []};
    const state = expensesReducer(initialState, addExpense(expense));

    expect(state.expenses).toContainEqual(expect.objectContaining(expense));
});




test('should remove an expense', () => {
    const id = uuidv4();
    const initialState = {
        expenses: [
        { id, type: 'Food', description: 'Lunch', amount: 10, owedTo: 'John', createdAt: 1000 }
        ]
    };

    const state = expensesReducer(initialState, removeExpense({ id }));

    expect(state.expenses).toEqual([]);
});




test('should edit an expense', () => {
    const id = uuidv4();
    const initialState = {
        expenses: [
        { id, type: 'Food', description: 'Lunch', amount: 10, owedTo: 'John', createdAt: 1000 }
        ]
    };

    const updates = { amount: 15, description: 'Dinner' };
    const state = expensesReducer(initialState, editExpense({ id, updates }));

    expect(state.expenses[0]).toEqual(expect.objectContaining(updates));
});

test('should add an expense type', () => {
    const newType = 'Travel';
    const initialState = {
        expenses: [],
        expenseTypes: [
        'Food', 'Groceries', 'Fuel', 'Entertainment', 'House maintenance',
        'Product', 'Clothes', 'Investments', 'Health', 'Bills', 'Fees',
        'Transport', 'Other'
        ]
    };

    const state = expensesReducer(initialState, addExpenseType(newType));

    expect(state.expenseTypes).toContain(newType);
    expect(state.expenseTypes[state.expenseTypes.length - 2]).toBe('Travel'); // Ensure 'Other' is still the last element
});

test('Other should be last element even after adding new type', () => {
    const newType = 'Travel';


    const state = expensesReducer(undefined, addExpenseType(newType));

    expect(state.expenseTypes).toContain(newType);
    expect(state.expenseTypes[state.expenseTypes.length - 1]).toBe('Other'); // Ensure 'Other' is still the last element
});

test('should remove an expense type', () => {
    const typeToRemove = 'Food';


    const state = expensesReducer(undefined, removeExpenseType(typeToRemove));

    expect(state.expenseTypes).not.toContain(typeToRemove);
});

test('should edit an expense type', () => {
    const sourceType = 'Food';
    const destType = 'Meal';


    const state = expensesReducer(undefined, editExpenseType({ sourceType, destType }));

    expect(state.expenseTypes).toContain(destType);
    expect(state.expenseTypes).not.toContain(sourceType);
});
