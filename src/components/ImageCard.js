import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageReference = React.createRef();
  }

  componentDidMount() {
    this.imageReference.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = console.log(this.imageReference.current.clientHeight);
    const spans = Math.ceil(height / 150);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageReference} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
