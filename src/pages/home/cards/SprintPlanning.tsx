import PopUp from "../../../components/ui/PopUp";
function SprintPlanning() {
  return (
    <div className="container max-w-md bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-4xl text-gray-700 font-bold mb-5">
        Unleash Agile Efficiency!
      </p>
      <p className="text-gray-500 text-lg">
        Empowering Agile Teams to Estimate Smarter
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 content-between">
        <button className="py-2 rounded hover:bg-sky-300 bg-sky-500 text-gray-200 ..">
          Start New Game
        </button>
        <button className="py-2 rounded hover:bg-sky-300 bg-sky-500 text-gray-200 ..">
          Join Game
        </button>
      </div>
      <PopUp></PopUp>
    </div>
  );
}

export default SprintPlanning;
