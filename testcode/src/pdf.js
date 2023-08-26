// import React, { useRef } from "react";
// import html2canvas from "html2canvas";

// function Screenshot() {
//   const screenshotRef = useRef(null);

//   const handleScreenshot = () => {
//     html2canvas(document.documentElement).then((canvas) => {
//       const screenshot = canvas.toDataURL();
//       // Create a link and download the screenshot
//       const link = document.createElement("a");
//       link.download = "screenshot.png";
//       link.href = screenshot;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     });
//   };

//   return (
//     <div>
//       <h1>Take a Screenshot</h1>
//       <button onClick={handleScreenshot}>Capture Screenshot</button>
//       <div ref={screenshotRef}>
//         {/* The content you want to capture */}
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>Hello, worldBDKFHSJFHSJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ!</p>
//         <p>CHAND</p>
//       </div>
//     </div>
//   );
// }

// export default Screenshot;
import React, { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

class App extends Component {
  constructor(props) {
    super(props);

    this.pdfExportComponent = React.createRef();
  }

  // render() {
  //   return (
  //     <div>
  //       <PDFExport
  //         paperSize="A4"
  //         fileName="page.pdf"
  //         ref={this.pdfExportComponent}
  //       >
  //         <button onClick={() => this.pdfExportComponent.current.save()}>
  //           Export PDF
  //         </button>
  //         <h1>Hello, World!</h1>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is an example page lAST.</p>
  //         <p>This is.</p>
  //       </PDFExport>

  //       <button onClick={() => this.pdfExportComponent.current.save()}>
  //         Export PDF
  //       </button>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <PDFExport
          paperSize="A4"
          fileName="page.pdf"
          ref={this.pdfExportComponent}
        >
          <button onClick={() => this.pdfExportComponent.current.save()}>
            Export PDF
          </button>
          <h1>Hello, World!</h1>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is.</p>
        </PDFExport>

        <button onClick={() => this.pdfExportComponent.current.save()}>
          Export PDF
        </button>
        <PDFExport
          paperSize="A4"
          fileName="page.pdf"
          scale={2}
          paperCompression={0.5}
          marginCompression={0.5}
          ref={(component) => (this.pdfExport = component)}
        >
          <button onClick={() => this.pdfExportComponent.current.save()}>
            Export PDF
          </button>
          <h1>Hello, World!</h1>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is an example page lAST.</p>
          <p>This is.</p>
        </PDFExport>

        <button onClick={() => this.pdfExportComponent.current.save()}>
          Export PDF
        </button>
      </div>
    );
  }
}

export default App;
