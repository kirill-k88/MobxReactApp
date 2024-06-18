export const getParams = (params: { [key: string]: string }) => {
  const serializedParams = new URLSearchParams();
  serializedParams.append('selectFields', 'name');
  serializedParams.append('selectFields', 'year');
  serializedParams.append('selectFields', 'id');
  serializedParams.append('selectFields', 'genres');
  serializedParams.append('selectFields', 'description');
  serializedParams.append('selectFields', 'poster');
  serializedParams.append('selectFields', 'rating');

  Object.keys(params).forEach((p: string) => {
    serializedParams.append(p, params[p]);
  });

  return {
    params: serializedParams
  };
};
