import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageReference = React.createRef();
  }

  componentDidMound() {
    console.log(this.imageReference);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageReference} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
