import { NextApiRequest, NextApiResponse } from "next";
import handler from ".";
import { ItemsSearchResponse } from "types/base";
import detailResponse from '__tests__/detailResponse.json';

const unmockedFetch = global.fetch;

beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        status: jest.fn(),
        json: () => Promise.resolve(detailResponse),
      })
  })
  
  afterAll(() => {
    global.fetch = unmockedFetch
  })

it("Items api", async ()=> {
    const req: NextApiRequest = {
        query: {
            id: 'MLA100214',
        }
    };
    const mockJson = jest.fn()
    const res: NextApiResponse<ItemsSearchResponse> = {
        status: () =>({
            json: mockJson,
        })        
    }
    await handler(req, res);
    expect(mockJson).toHaveBeenCalledTimes(4);
});