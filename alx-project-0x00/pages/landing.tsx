import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="grid grid-cols-3 gap-4">
        <Button title="Small - Sm" size="small" shape="rounded-sm" />
        <Button title="Medium - Md" size="medium" shape="rounded-md" />
        <Button title="Large - Full" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;