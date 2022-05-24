import reducer from "../redux/reducers"

const initState = {
    username:''
}

describe("Reducer", () => {
    test("it initialises ...", () => {
      const initReturn = reducer(undefined, { type: "@@INIT" });
      expect(initReturn).toEqual({
        username: ''
      });
    });
});