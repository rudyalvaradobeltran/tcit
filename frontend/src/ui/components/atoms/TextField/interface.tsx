export default interface ITextField {
  label: string;
  name: string;
  onChange: (e: any) => void;
  value: string;
}
