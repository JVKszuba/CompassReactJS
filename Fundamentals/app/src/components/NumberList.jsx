function NumberList({numbers}) {

    return (
        <div>
            {numbers.map((number, index) => (
                <li key = {index}>{number}</li>
            ))}
        </div>
    );
}

export default NumberList;