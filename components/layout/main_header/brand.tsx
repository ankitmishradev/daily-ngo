import { brandData } from "./data";

export const Brand = () => {
  return (
    <div className="brand">
      <a href={brandData.logo}>
        <div>
          <h3>{brandData.name}</h3>
        </div>
      </a>
    </div>
  );
};
