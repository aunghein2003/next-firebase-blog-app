import { Oval } from "react-loader-spinner";

export default function LoadingIndicator() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Oval width={80} height={80} color="#475569" secondaryColor="#64748b" />
    </div>
  );
}
