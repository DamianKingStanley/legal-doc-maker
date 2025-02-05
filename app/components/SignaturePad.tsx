import React, { useRef, useState, forwardRef } from "react";
import SignatureCanvas from "react-signature-canvas";

interface SignaturePadProps {
  onSave: (signatureDataUrl: string | undefined) => void;
}

const SignaturePad = forwardRef<SignatureCanvas, SignaturePadProps>(
  ({ onSave }, ref) => {
    const signatureRef = useRef<SignatureCanvas>(null);
    const [isSigned, setIsSigned] = useState(false);

    const handleClear = () => {
      if (signatureRef.current) signatureRef.current.clear();
      setIsSigned(false);
    };

    const handleSave = () => {
      if (signatureRef.current && signatureRef.current.isEmpty()) {
        alert("Please sign before saving.");
      } else {
        const signatureDataUrl = signatureRef.current?.toDataURL();
        onSave(signatureDataUrl); // Pass the signature to parent component
        setIsSigned(true);
      }
    };

    React.useEffect(() => {
      if (ref) {
        (ref as React.MutableRefObject<SignatureCanvas | null>).current =
          signatureRef.current;
      }
    }, [ref]);

    return (
      <div className="signature-container">
        <SignatureCanvas
          ref={signatureRef}
          backgroundColor="white"
          penColor="black"
          canvasProps={{ width: 500, height: 200, className: "signature-pad" }}
        />
        <div className="buttons">
          <button onClick={handleSave} disabled={isSigned}>
            Save Signature
          </button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    );
  }
);

SignaturePad.displayName = "SignaturePad";

export default SignaturePad;
