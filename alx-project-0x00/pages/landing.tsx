import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="grid grid-cols-3 gap-4">
        <Button
          title="Rounded + Styled"
          size="medium"
          shape="rounded-md"
          styles="rounded-lg shadow-lg bg-green-500"
        />

        <Button
          title="Custom Style"
          size="small"
          shape="rounded-sm"
          styles="border-2 border-yellow-500"
        />
      </div>
    </div>
  );
};

export default Landing;
