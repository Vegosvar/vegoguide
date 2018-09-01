import actions from "./actions.js";
import { SET_FILTER_CATEGORIES } from "./constants";

test("CREATE_POST adds post correctly", () => {
  const reference = {
    type: SET_FILTER_CATEGORIES,
    value
  };

  const result = actions[SET_FILTER_CATEGORIES](value);

  expect(result).toEqual(reference);
});
