import React, { useEffect } from "react";
import axios from "axios";

export function useUser() {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState({
    avatar: "/static/images/avatar.png",
    name: "Guest",
    email: "----",
  });

  useEffect(() => {
    axios
      .get("/api/user")
      .then((result) => {
        const response = result.data;
        const { user: userResponse } = response;

        if (userResponse) {
          setUser(userResponse);
        } else {
          throw new Error("Error Occured while getting data");
        }
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
