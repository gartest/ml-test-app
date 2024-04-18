/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Card from "./";
import { Item } from "types/base";

it("Breadcrumb component", () => {
    const item: Item = {
        id: 'sampleid',
        title: 'Test title',
        price: {
            amount: 100,
            currency: 'CLP',
            decimals: 0,
        },
        picture: '/image_url',
        condition: 'new',
        free_shippin: true,
    }
    render(<Card item={item} />);
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/items/sampleid');
    expect(screen.getByRole('heading').innerHTML).toBe('$100');
    expect(screen.getByRole('img')).toHaveAttribute('src', '/_next/image?url=%2Fimage_url&w=384&q=75');
});
