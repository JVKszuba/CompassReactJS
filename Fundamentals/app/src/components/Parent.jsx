import Child from "./Child.jsx";

function Parent({ name, age }) {

    return (
        <div>
          <Child name = {name} age = {age} />
        </div>
    )
}

export default Parent