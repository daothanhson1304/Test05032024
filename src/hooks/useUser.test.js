import { renderHook, act } from "@testing-library/react-hooks";
import useUser from "./useUser";
import {
  expect,
  it,
  describe,
  jest,
  global,
} from "@testing-library/jest-dom/extend-expect";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ]),
  })
);

describe("useUser", () => {
  it("should fetch users", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUser());

    // Initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.users).toEqual([]);

    // Wait for the data to be fetched
    await waitForNextUpdate();

    // Updated state after data fetching
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.users).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]);
  });

  it("should set searchUser", () => {
    const { result } = renderHook(() => useUser());

    act(() => {
      result.current.setSearchUser("John");
    });

    expect(result.current.searchUser).toBe("John");
  });
});
