export default function VisuallyHidden({ as: Tag = "span", ...props }) {
  return <Tag {...props} />;
}
