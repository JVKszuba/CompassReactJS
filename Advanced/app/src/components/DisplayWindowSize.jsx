import useWindowSize from '../hooks/useWindowSize';

function DisplayWindowSize() {

    const {width, height} = useWindowSize();

    return (
        <div>
          <p>The screen width is: {width}</p>
          <p>The screen height is: {height}</p>
        </div>
    );
}

export default DisplayWindowSize;