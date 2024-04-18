/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Detail from "./";
import { DescriptionItem } from "types/base";

it("Detail component", () => {
    const item: DescriptionItem = {
        id: 'sampleid',
        title: 'Test title',
        price: {
            amount: 100.4,
            currency: 'CLP',
            decimals: 0,
        },
        picture: '/image_url',
        condition: 'new',
        free_shippin: true,
        description: 'sample description',
    }
    render(<Detail item={item} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/image_url');
    expect(screen.getByRole('heading', { level: 4 }).innerHTML).toBe('Test title');
    expect(screen.getByText('sample description')).toBeInTheDocument();
});
