import * as React from "react";
import * as ReactDOM from "react-dom";

interface DemoFormProps {
    someText?: string;
}

class DemoForm extends React.Component<DemoFormProps, void> {

    // get propTypes() {
    //     return {
    //         someText: React.PropTypes.string
    //     }
    // }

    public static propTypes = {
        someText: React.PropTypes.string.isRequired,
        someNumber: React.PropTypes.number,
        car: React.PropTypes.instanceOf(Car),
        car2: React.PropTypes.shape({
            make: React.PropTypes.string,
            model: React.PropTypes.string,
        }),
        cars: React.PropTypes.arrayOf(React.PropTypes.shape({
            make: React.PropTypes.string,
            model: React.PropTypes.string,
        }))
    };

    public static defaultProps = {
        someText: "Daryl is a rock star and an inspiration to us all!",
    };

    public render() {

        return <div>
            {this.props.someText}
        </div>;
    }
}

ReactDOM.render(<DemoForm />, document.querySelector("main"));
