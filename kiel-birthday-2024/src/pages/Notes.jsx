import '../App.css';

const Notes = () => {
    const notes = [
        "Note 1: Remember to buy milk.",
        "Note 2: Finish the React project.",
        "Note 3: Schedule dentist appointment.",
        "Note 4: Call mom.",
        "Note 5: Read a book.",
    ];

    return (
        <>
        <h1>notes</h1>
        <div className="cards-container">
            {notes.map((note, index) => (
                <div className="card" key={index}>
                    <h2>{note}</h2>
                </div>
            ))}
        </div>
        </>
    );
};

export default Notes;
