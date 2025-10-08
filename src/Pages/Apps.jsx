
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProdducts';

const Apps = () => {
    const {apps, loading, error} = useProducts(); 
        
    
    return (
         <div className="max-w-[2000px] mx-auto">
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="my-3 text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <h2>{apps.length}Apps Found</h2>
        <input className='bg-amber-500' type="text" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      
    </div>
    );
};

export default Apps;