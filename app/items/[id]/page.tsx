type Params = {
    params: {
      id: string;
    };
  };
  
export const metadata = {
    title: "Items: id",
  };
  
  export default function ItemDetail({ params }: Params) {
    return <h1>Item id: {params.id}</h1>;
  }
  