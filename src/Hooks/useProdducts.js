import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios("../Data.json")
      .then((data) => {
        setApps(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { apps, loading, error };
};

export default useProducts;
