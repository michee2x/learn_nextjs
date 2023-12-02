export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center max-w-lg mx-auto min-h-screen py-2">
      <h1 className="text-2xl ">Profile</h1>
      <hr />
      <p className="text-3xl">
        Profile Page
        <span className="p-2 rounded bg-orange-300 text-black mx-2">
          {params.id}
        </span>
      </p>
    </div>
  );
}
