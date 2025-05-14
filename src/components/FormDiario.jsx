export const FormDiario = ({onSubmit}) => {

  const submit = (e) => {
    e.preventDefault();
    const formData= new FormData(e.target)

    const data={
      note: formData.get("note"),
      mood: formData.get("mood")
    }
    onSubmit(data)
  };

  return (
    <div>
      <h1>Come ti senti oggi?</h1>
      <form onSubmit={submit}>
        <textarea
          name="note"
          id="note"
          placeholder="Spiegaci perchè"
        ></textarea>

        <div>

          <div>
            <label htmlFor="sad"> Triste 😢</label>
            <input type="radio" name="mood" value="triste" id="sad" />
          </div>

          <div>
            <label htmlFor="down"> Giù di morale 😔</label>
            <input type="radio" name="mood" value="giù di morale" id="down" />
          </div>

          <div>
            <label htmlFor="calm"> Sereno 😊</label>
            <input type="radio" name="mood" value="sereno" id="calm" />
          </div>

          <div>
            <label htmlFor="happy"> Felice 😁</label>
            <input type="radio" name="mood" value="felice" id="happy" />
          </div>

        </div>
        <button type="submit"> Invio </button>
      </form>
    </div>
  );
};
