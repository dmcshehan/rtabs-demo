import React from "react";

import Header from "./Header/Header";
import Horizontal from "./Horizontal/Horizontal";

import Vertical from "./Vertical/Vertical";

function App() {
  const books = [
    {
      title: "The Glass Hotel",
      description: `Fans of the genre-defying post-apocalyptic novel Station Eleven, rejoice: Emily St. John Mandel is back with a new novel that weaves otherworldly elements throughout the storyline of a modern financial thriller.`,
    },
    {
      title: "Real Life",
      description: `From a black, queer writer and former biochem Ph.D. candidate living in a Midwestern university town comes a searing debut about … a black, queer biochem Ph.D. candidate living in a Midwestern university town. When Wallace has an unexpected encounter with a supposedly-straight white classmate amid a time of mounting hostility in his community, he is forced to confront long-hidden wounds. Whether despite or because of Taylor’s closeness to his subject matter, the result is a novel of quiet, startling power.`,
    },
    {
      title: "Wow, No Thank You",
      description: `Ever since the publication of Meaty in 2013, Irby’s essays have been required reading on the millennial condition. In her latest collection, the writer—now approaching 40 and living a Pinterest-ified version of the American dream in a small Midwestern town—turns her addictively bummed-out wit to topics like “lesbian bed death” and the difficulty of making adult friendships.`,
    },
    {
      title: "The Vanishing Half",
      description: `When the Vignes twin sisters were growing up, they were inseparable. But now, as adults, they’ve taken two paths: one living with her Black daughter in the same community she’s known her whole life; the other passing as white and living among loved ones who have no idea where she came from. Propulsive and compassionate, Bennett’s follow-up to The Mothers is not to be missed. `,
    },
    {
      title: "Fairest",
      description: `With her debut title, award-winning journalist Talusan turns her talents to memoir to chart her path from childhood in a rural Philippine village to adult life as a white-passing trans woman in American academia. The result is a stirring meditation on race, gender, and identity.`,
    },
  ];
  return (
    <div>
      <Header />
      <Horizontal data={books} />
      <Vertical data={books} />
    </div>
  );
}

export default App;
