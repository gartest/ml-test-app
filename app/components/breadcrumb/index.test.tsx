/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Breadcrumb from "./";

it("Breadcrumb component", () => {
    const categories = ['Sample', 'values', 'to', 'test', 'component'];
    render(<Breadcrumb categories={categories} />);
    const list = screen.getByRole("list");
    expect(list.children.length).toBe(5);
});
