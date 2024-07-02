import { debounce } from "./debounce";

jest.useFakeTimers();

describe('debounce', () => {
    it('should debounce a function', () => {
        const mockFunction = jest.fn();
        const debouncedFunction = debounce(mockFunction, 1000);

        debouncedFunction();
        debouncedFunction();
        debouncedFunction();

        jest.advanceTimersByTime(999);

        expect(mockFunction).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1);

        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});