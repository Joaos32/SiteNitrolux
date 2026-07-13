import dynamic from "next/dynamic";

const HomeExperience = dynamic(() => import("./microfrontends/HomeExperience"));
const CatalogExperience = dynamic(() => import("./microfrontends/CatalogExperience"));
const ProductExperience = dynamic(() => import("./microfrontends/ProductExperience"));
const SearchExperience = dynamic(() => import("./microfrontends/SearchExperience"));
const InstitutionalExperience = dynamic(
  () => import("./microfrontends/InstitutionalExperience"),
);
const BlogExperience = dynamic(() => import("./microfrontends/BlogExperience"));
const CommercialExperience = dynamic(
  () => import("./microfrontends/CommercialExperience"),
);

export function MicrofrontendShell() {
  return (
    <>
      <HomeExperience />
      <CatalogExperience />
      <ProductExperience />
      <SearchExperience />
      <InstitutionalExperience />
      <BlogExperience />
      <CommercialExperience />
    </>
  );
}
