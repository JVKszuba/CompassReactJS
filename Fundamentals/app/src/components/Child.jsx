import Description from "./Description.jsx";

function Child(props) {

    return (
        <div>
          <Description name = {props.name} age = {props.age} />
        </div>
    )
}

export default Child;