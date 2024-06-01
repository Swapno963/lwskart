"use client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef, useState } from "react";
// for email
import emailjs from "@emailjs/browser";
import InvoicePdf from "./InvoicePdf";

export default function GeneratePdf({ allproduct }) {
  const [download, setDownload] = useState();
  const [generatedpdf, setGeneratedPdf] = useState();
  const invoicePdfRef = useRef(null);

  // for send email
  const handelEmailSend = () => {
    const templateParams = {
      to_name: "Customer",
      from_name: "LwsCart",
      message: "Thnks for shopping!",
      from_email: "swapno963@gmail.com",
    };

    emailjs
      .send("service_8l5dyhn", "template_iehp74b", templateParams, {
        publicKey: "f8BJZC5IylaRbVnV0",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  //   for pdf generation
  const handelGeneratePdf = async () => {
    const inputData = invoicePdfRef.current;
    try {
      const canvas = await html2canvas(inputData);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: "a4",
      });
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("Invoice.pdf");
      handelEmailSend();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => handelGeneratePdf()}
        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >
        Check Our And Download Invoice
      </button>
      <div ref={invoicePdfRef}>
        <InvoicePdf allproduct={allproduct} />
        {/* <div>dkklfdsk</div> */}
      </div>
    </>
  );
}
