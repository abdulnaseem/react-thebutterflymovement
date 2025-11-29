import MmaClassCard from './MmaClassCard';

const MmaClassGrid = ({ title, subtitle, classes }) => {
  return (
    <section className="py-12 md:py-16 px-5 md:px-10 bg-[#0b0d10]">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 sm:mb-10">
          <h2 className="mma-logo-font text-3xl md:text-4xl font-bold tracking-wide text-[#f5f0e5]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
              {subtitle}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <MmaClassCard key={cls.id} {...cls} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MmaClassGrid;