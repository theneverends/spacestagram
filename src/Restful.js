import React from "react";

export async function restful() {
  const response = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=UzSgl1dG6wqfUUp3oSeinvDyZQDL0g58fyRRKQiN"
  );
  const data = response.json();
  return data;
}
