const Scoreboard = () => {
  return (
    <section className='scoreboard'>
      <h2>Scoreboard Component</h2>

      <div>
        <h3>Your current score is {'#'}</h3>
        <div className='btn-group'>
          <button>+</button>
          <button>-</button>
        </div>
        <p>{`"Let's make it over 100!"`}</p>
      </div>
    </section>
  );
};

export default Scoreboard;
