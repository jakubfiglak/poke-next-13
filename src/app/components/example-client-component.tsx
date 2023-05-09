"use client";

import { getData } from "@/lib/get-data";
import { useEffect, useState } from "react";

export const ExampleClientComponent = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    async function fetchThing() {
      const data = await getData();
      console.log(data);
      setState(data);
    }

    fetchThing();
  }, []);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
