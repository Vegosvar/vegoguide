import actions from "./actions.js";
import { SET_FILTER_CATEGORIES } from "./constants";

test("SET_FILTER_CATEGORIES returns correct value", () => {
  const value = ["Snabbmat"];
  const reference = {
    type: SET_FILTER_CATEGORIES,
    value
  };

  const result = actions[SET_FILTER_CATEGORIES](value);

  expect(result).toEqual(reference);
});
