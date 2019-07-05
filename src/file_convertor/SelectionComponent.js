import React from 'react';

// constructor(props) {
//   super(props);
//   this.onChange = this.onChange.bind(this)
//   this.onFormSubmit = this.onFormSubmit.bind(this)
//   this.state = {};
// }
// onFormSubmit(event) {
//   event.preventDefault(); // Stop form submit
//   console.log("open file browser", this.state.file);
// }
// onChange(event) {
//     this.setState({file: event.target.files[0]})
// }
// render() {
//   return (
//     <form onSubmit={this.onFormSubmit}>
//       <h1>File Upload</h1>
//       <input type="file" accept = "audio/flac" onChange={this.onChange} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// }

const SelectionComponent = (props) => {
    return(<div>
        Selection
    </div>);
}

export default SelectionComponent;