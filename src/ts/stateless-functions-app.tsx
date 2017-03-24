import * as React from "react";
import * as ReactDOM from "react-dom";

interface HeaderProps {
    headerText: string;
}


const Header: React.StatelessComponent<HeaderProps> = (props: HeaderProps) => <h1>{props.headerText}</h1>;

const SimpleForm = (props: { initialValue: string }) => {

    let inputElement: HTMLInputElement = null;

    const save = () => {
        console.log(inputElement.value);
    }

    return <form>
        <input type="text" defaultValue={props.initialValue} ref={(input) => inputElement = input} />
        <button type="button" onClick={save}>Save</button>
        <br />{inputElement && inputElement.value}
    </form>;

};

const ClickTheButton = () => {

    const clickMe = () => {
        console.log("I was clicked!");
    };

    return <button onClick={clickMe}>Click Me</button>;
};



ReactDOM.render(<div>
    <Header headerText="Hello World!!!!" />
    <SimpleForm initialValue="Hector is amazing!" />
    <ClickTheButton />
</div>, document.querySelector("main"));
