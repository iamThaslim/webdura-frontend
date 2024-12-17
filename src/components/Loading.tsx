/**
 * A full-screen loading animation.
 *
 * @returns A JSX element representing a full-screen loading animation.
 */
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full"></div>
    </div>
  );
}
