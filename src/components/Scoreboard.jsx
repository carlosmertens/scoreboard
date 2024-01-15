const Scoreboard = () => {
  return (
    <section>
      <h2>Scoreboard Component</h2>

      <div>
        <h3>Your current score is {'#'}</h3>
        <button>+</button>
        <button>-</button>
        <p>{`"Let's make it over 100!"`}</p>
      </div>
    </section>
  );
};

export default Scoreboard;
