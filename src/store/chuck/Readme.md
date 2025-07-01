### TLDR -> experiment to separate lifecycle logic (error, loading) from actual state

### Chuck Norris Jokes Redux Slice

## Overview

This Redux Toolkit slice manages the state of fetching Chuck Norris jokes, categories, and search results from an API. It includes handling of asynchronous actions and their different lifecycle states — pending, fulfilled, and rejected — with a focus on reducing repetitive error and loading state logic.

## Features

- Centralized handling of async action lifecycle states (pending, rejected) using reusable handlers.

- TypeScript types for strong type safety across actions and state.

- Clear separation of concerns for loading states, errors, and search/no-result flags.

- Uses Redux Toolkit's createSlice and extraReducers with addMatcher for elegant async action matching.

- Manages joke modes (selected or searched) to control UI state effectively.

## Why This Approach?

You might wonder why this solution manually maps pending and rejected handlers by action type prefix instead of fully relying on createAsyncThunk’s built-in lifecycle handling.

The reason: **to reduce repetition**.

In many Redux Toolkit apps, each async thunk requires repetitive boilerplate to handle loading and error states, often with near-identical code blocks. This experiment centralizes that logic:

- One place to declare how pending and rejected states affect the store.

- Easily extensible to new async actions by simply adding to handler maps.

- Consistent error messaging and loading flags without repeating yourself.

## Usage

This slice is designed to be combined with async action creators like:

fetchJoke

fetchCategories

searchJokes

Each async thunk dispatches lifecycle actions (pending, fulfilled, rejected) that are handled centrally by this slice’s lifecycle handlers.

## State Shape

```bash
type ChuckState = {
  categories: string[];
  categoriesLoading: boolean;
  error: string | null;
  joke: ChuckNorrisJoke | null;
  jokeLoading: boolean;
  jokeMode: JokeMode;
  searchLoading: boolean;
  searchNoResults: boolean;
  searchQuery: string;
  selectedCategory: string;
};
```

## How to Extend

To add new async actions:

1. Add your async thunk action (e.g., fetchNewData).

2. Add corresponding handlers in the pendingHandlers and rejectedHandlers maps keyed by the thunk’s typePrefix.

3. Handle fulfilled in extraReducers as usual.

## Notes

- This approach trades some type safety and idiomatic RTK simplicity for centralized lifecycle management.

- In smaller apps or fewer async thunks, you might prefer the standard createAsyncThunk pattern.

- This pattern scales nicely when you have many similar async actions with repeated loading/error handling.
