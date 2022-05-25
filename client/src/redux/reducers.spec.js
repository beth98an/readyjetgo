import reducer from "../redux/reducers"

const initState = {
    username:'',
    answers: {}
}

describe("Reducer", () => {
    test("it initialises ...", () => {
      const initReturn = reducer(undefined, { type: "@@INIT" });
      expect(initReturn).toEqual({
        username: '',
        answers: {}
      });
    });
});