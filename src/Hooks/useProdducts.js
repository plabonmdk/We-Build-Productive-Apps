import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios("../Data.json")
      .then((data) => {
        // Timer দিয়ে loading টা একটু দেরিতে বন্ধ করা হচ্ছে
        setTimeout(() => {
          setApps(data.data);
          setLoading(false);
        }, 1500); // 1.5 seconds delay (চাওলে পরিবর্তন করতে পারো)
      })
      .catch((err) => {
        setTimeout(() => {
          setError(err);
          setLoading(false);
        }, 1500);
      });
  }, []);

  return { apps, loading, error };
};

export default useProducts;
