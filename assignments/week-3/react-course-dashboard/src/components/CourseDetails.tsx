import type { CourseDetailsProps } from "./Interfaces";

export default function CourseDetails({
  description,
  duration,
  level,
}: CourseDetailsProps) {
  return (
    <>
      <p>{description}</p>
      <p>Duration: {duration} hours</p>
      <p>Level: {level}</p>
    </>
  );
}
