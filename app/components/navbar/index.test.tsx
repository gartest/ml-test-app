/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./";

import { useSearchParams, useRouter } from 'next/navigation'; 

jest.mock('next/navigation');
const pushMock = jest.fn();

useRouter.mockReturnValue({
    push: pushMock,
});


it("Navbar component", () => {
    render(<Navbar />);
    expect(useSearchParams).toHaveBeenCalled();
    expect(useRouter).toHaveBeenCalled();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hola' }});
    expect(input).toHaveAttribute('value', 'Hola');
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(pushMock).toHaveBeenCalledWith('/items?search=Hola');
});
