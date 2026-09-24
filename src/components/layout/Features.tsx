import { features } from "../../data/features";

export const Features = () => {
  return (
    <section className="mx-auto w-9/10 max-w-300 py-12">
      <div className="max-w-145 text-center md:text-start">
        <h2 className="mb-5 text-3xl text-blue-950">Why choose Digitalbank?</h2>
        <p className="mb-15 leading-snug tracking-tight text-gray-600">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col gap-3 text-center lg:text-start"
          >
            <img
              className="mx-auto mb-3 w-15 lg:mx-0"
              src={feature.iconUrl}
              alt=""
            />
            <h3 className="text-2xl text-blue-950">{feature.title}</h3>
            <p className="leading-snug tracking-tight">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
