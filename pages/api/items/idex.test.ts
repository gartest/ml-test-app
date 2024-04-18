import { NextApiRequest, NextApiResponse } from "next";
import handler from ".";
import { ItemsSearchResponse } from "types/base";

const unmockedFetch = global.fetch;

beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        status: jest.fn(),
        json: () => Promise.resolve([]),
      })
  })
  
  afterAll(() => {
    global.fetch = unmockedFetch
  })

it("Items api", async ()=> {
    const req: NextApiRequest = {
        query: {
            q: 'Iphone',
        }
    };
    const mockJson = jest.fn()
    const res: NextApiResponse<ItemsSearchResponse> = {
        status: () =>({
            json: mockJson,
        })        
    }
    await handler(req, res);
    expect(mockJson).toHaveBeenCalledWith({
        author: {lastname: "Vásquez", name: "Carlos"}, 
        categories: [], 
        items: [],
    });
});