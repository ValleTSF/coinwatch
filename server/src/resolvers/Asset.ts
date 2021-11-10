export const Asset = {
  asset_icon: (parent: any) => {
    return `https://cryptoicons.org/api/white/${parent.asset_id.toLowerCase()}/50`;
  },
};

export default Asset;
