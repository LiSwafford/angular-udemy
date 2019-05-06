import { ReversePipe } from "./reverse.pipe";

describe("Component: ReversePipe", () => {
  it("should reverse the string", () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform("hello")).toEqual("olleh");
  });
});
